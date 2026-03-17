"use client";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(null);
  const [searchCustomer, setSearchCustomer] = useState("");
  const toast = useRef(null);

  const statusOptions = [
    { label: "All", value: null },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
  ];

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    filterPayments();
  }, [payments, filterStatus, searchCustomer]);

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/bookings");
      if (!res.ok) throw new Error("Failed to load payments");
      const data = await res.json();
      setPayments(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load payment history",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterPayments = () => {
    let filtered = payments;

    if (filterStatus) {
      filtered = filtered.filter((p) => p.booking_status_id === filterStatus);
    }

    if (searchCustomer) {
      filtered = filtered.filter((p) =>
        p.customer?.name?.toLowerCase().includes(searchCustomer.toLowerCase())
      );
    }

    setFilteredPayments(filtered);
  };

  const statusBody = (row) => (
    <span
      className={`p-tag ${
        row.booking_status_id === "confirmed"
          ? "p-tag-success"
          : row.booking_status_id === "pending"
          ? "p-tag-warning"
          : "p-tag-danger"
      }`}
    >
      {row.booking_status_id || "Pending"}
    </span>
  );

  const amountBody = (row) => {
    const days = Math.ceil(
      (new Date(row.end_time) - new Date(row.start_time)) / (1000 * 60 * 60 * 24)
    );
    const amount = days * (row.vehicle?.pricePerDay || 0);
    return `₹${amount.toLocaleString()}`;
  };

  const totalAmount = filteredPayments.reduce((sum, p) => {
    const days = Math.ceil(
      (new Date(p.end_time) - new Date(p.start_time)) / (1000 * 60 * 60 * 24)
    );
    return sum + days * (p.vehicle?.pricePerDay || 0);
  }, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem" }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Payment History</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>Track all booking payments and transactions</p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        <Card style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Total Payments</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>₹{totalAmount.toLocaleString()}</p>
          </div>
        </Card>
        <Card style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Total Transactions</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>{filteredPayments.length}</p>
          </div>
        </Card>
        <Card style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Completed</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>
              {filteredPayments.filter((p) => p.booking_status_id === "confirmed").length}
            </p>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card style={{ marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Filter by Status</label>
            <Dropdown
              value={filterStatus}
              options={statusOptions}
              onChange={(e) => setFilterStatus(e.value)}
              optionLabel="label"
              optionValue="value"
              placeholder="Select status"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Search Customer</label>
            <InputText
              placeholder="Search by customer name"
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Card>

      {/* Payments Table */}
      <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={filteredPayments}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          emptyMessage={loading ? "Loading payments..." : "No payments found"}
          responsiveLayout="scroll"
          dataKey="id"
          stripedRows
        >
          <Column field="booking_number" header="Booking #" sortable />
          <Column field="customer.name" header="Customer" />
          <Column field="vehicle.brand" header="Vehicle" />
          <Column header="Amount" body={amountBody} />
          <Column header="Status" body={statusBody} />
          <Column field="createdAt" header="Date" body={(row) => new Date(row.createdAt).toLocaleDateString()} />
        </DataTable>
      </Card>
    </div>
  );
}
