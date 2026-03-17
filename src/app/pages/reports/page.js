"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function ReportsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/bookings");
      if (!res.ok) throw new Error("Failed to load data");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load reports",
      });
    } finally {
      setLoading(false);
    }
  };

  // Calculate metrics
  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((sum, b) => {
    const days = Math.ceil((new Date(b.end_time) - new Date(b.start_time)) / (1000 * 60 * 60 * 24));
    return sum + days * (b.vehicle?.pricePerDay || 0);
  }, 0);
  const completedBookings = bookings.filter((b) => b.booking_status_id === "confirmed").length;
  const averageBookingValue = totalBookings > 0 ? (totalRevenue / totalBookings).toFixed(2) : 0;

  // Monthly revenue data
  const monthlyData = {};
  bookings.forEach((b) => {
    const month = new Date(b.createdAt).toLocaleString("default", { month: "short" });
    const days = Math.ceil((new Date(b.end_time) - new Date(b.start_time)) / (1000 * 60 * 60 * 24));
    const revenue = days * (b.vehicle?.pricePerDay || 0);
    monthlyData[month] = (monthlyData[month] || 0) + revenue;
  });

  const monthlyChartData = Object.entries(monthlyData).map(([month, revenue]) => ({
    month,
    revenue,
  }));

  // Vehicle popularity
  const vehicleStats = {};
  bookings.forEach((b) => {
    const brand = b.vehicle?.brand || "Unknown";
    vehicleStats[brand] = (vehicleStats[brand] || 0) + 1;
  });

  const vehicleChartData = Object.entries(vehicleStats).map(([brand, count]) => ({
    brand,
    bookings: count,
  }));

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem" }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Reports & Analytics</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>Comprehensive business analytics and insights</p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        <Card style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
          <div>
            <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0", opacity: 0.9 }}>Total Revenue</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>₹{totalRevenue.toLocaleString()}</p>
          </div>
        </Card>

        <Card style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white" }}>
          <div>
            <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0", opacity: 0.9 }}>Total Bookings</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{totalBookings}</p>
          </div>
        </Card>

        <Card style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white" }}>
          <div>
            <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0", opacity: 0.9 }}>Completed</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{completedBookings}</p>
          </div>
        </Card>

        <Card style={{ background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", color: "white" }}>
          <div>
            <p style={{ fontSize: "0.9rem", margin: "0 0 0.5rem 0", opacity: 0.9 }}>Avg. Booking Value</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>₹{averageBookingValue}</p>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
        <Card>
          <h4 style={{ marginTop: 0 }}>Monthly Revenue</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#667eea" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h4 style={{ marginTop: 0 }}>Vehicle Popularity</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vehicleChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="brand" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#f5576c" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Stats */}
      <Card>
        <h4 style={{ marginTop: 0 }}>Summary Statistics</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>Booking Success Rate</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea", margin: "0.5rem 0 0 0" }}>
              {totalBookings > 0 ? ((completedBookings / totalBookings) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>Pending Bookings</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f5576c", margin: "0.5rem 0 0 0" }}>
              {totalBookings - completedBookings}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", margin: 0 }}>Top Vehicle Brand</p>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#10b981", margin: "0.5rem 0 0 0" }}>
              {vehicleChartData.length > 0 ? vehicleChartData.sort((a, b) => b.bookings - a.bookings)[0].brand : "N/A"}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
