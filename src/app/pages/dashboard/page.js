"use client";

import React from "react";
import { Card } from "primereact/card";
import { useRouter } from "next/navigation";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Sample data
const usersList = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
];

const carsList = ["Honda City", "Toyota Innova", "Hyundai i20", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift", "Suzuki Swift"];

const bookingsList = [
  { id: 1, user: "John Doe", car: "Honda City" },
  { id: 2, user: "Jane Smith", car: "Toyota Innova" },
  { id: 3, user: "Mike Johnson", car: "Hyundai i20" },
  { id: 4, user: "John Doe", car: "Honda City" },
  { id: 5, user: "Jane Smith", car: "Toyota Innova" },
  { id: 6, user: "Mike Johnson", car: "Hyundai i20" },
  { id: 7, user: "John Doe", car: "Honda City" },
];

export default function DashboardPage() {
  const router = useRouter();
  const cards = [
    { title: "Users", action: "Manage users", total: usersList.length, url: "/pages/users" },
    { title: "Cars", action: "Manage cars", total: carsList.length, url: "/pages/brands" },
    { title: "Bookings", action: "View bookings", total: bookingsList.length, url: "/pages/bookings" },
    { title: "Settings", action: "Configure system", total: null, url: "/pages/settings" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#1a1a1a", padding: "2rem", color: "#ffffff" }}>
      <h2 style={{ fontWeight: "bold", textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Dashboard</h2>

      {/* 2x2 Grid of Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            style={{ background: "#ffffff", color: "#333333", borderRadius: "8px", padding: "1rem", height: "200px", cursor: card.url ? "pointer" : "default" }}
            onClick={() => card.url && router.push(card.url)}
          >
            <div>
              <p>{card.action}</p>
              {card.total !== null && <p>Total: {card.total}</p>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}