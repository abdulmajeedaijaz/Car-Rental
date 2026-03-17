"use client"; // ⚠️ This makes the file a Client Component

import React from "react";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function Layout({ children }) {
  const items = [
    { label: "Home", icon: "pi pi-home", url: "/pages/dashboard" },
    {
      label: "Admin",
      icon: "pi pi-cog",
      items: [
        { label: "Users", icon: "pi pi-users", url: "/pages/users" },
        { label: "Brands", icon: "pi pi-car", url: "/pages/brands" },
        { label: "Models", icon: "pi pi-car", url: "/pages/models" },
        { label: "Variants", icon: "pi pi-car", url: "/pages/variants" },
        { label: "States", icon: "pi pi-map-marker", url: "/pages/states" },
        { label: "Cities", icon: "pi pi-map-marker", url: "/pages/cities" },
        { label: "Checklist Categories", icon: "pi pi-list", url: "/pages/checklist-categories" },
        { label: "Checklist Options", icon: "pi pi-list", url: "/pages/checklist-options" },
        { label: "Settings", icon: "pi pi-cog", url: "/pages/settings" },
      ],
    },
    {
      label: "Inventory",
      icon: "pi pi-warehouse",
      items: [
        { label: "Pending Vehicles", icon: "pi pi-car", url: "/pages/pending-vehicles" },
        { label: "Available Vehicles", icon: "pi pi-check", url: "/pages/available-vehicles" },
      ],
    },
    { label: "Bookings", icon: "pi pi-calendar", url: "/pages/bookings" },
    { label: "Hosters", icon: "pi pi-user-plus", url: "/pages/hosters" },
    { label: "Customers", icon: "pi pi-users", url: "/pages/customers" },
    {
      label: "Billing",
      icon: "pi pi-dollar",
      items: [
        { label: "Invoices", icon: "pi pi-file", url: "/pages/invoices" },
        { label: "Payment History", icon: "pi pi-calendar", url: "/pages/payment-history" },
      ],
    },
    { label: "Reports", icon: "pi pi-chart-bar", url: "/pages/reports" },
    { label: "Support", icon: "pi pi-question-circle", url: "/pages/support" },
  ];

  const start = (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-car text-blue-600 text-2xl"></i>
      <span className="text-xl font-bold text-blue-600">Car Rental Admin</span>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-3">
      <button
        className="p-button p-component p-button-sm p-button-danger"
        onClick={() => (window.location.href = "/")}
      >
        <i className="pi pi-sign-out"></i>
        <span className="p-button-label">Logout</span>
      </button>
    </div>
  );

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <Menubar model={items} start={start} end={end} style={{ borderRadius: 0 }} />
      </div>
      <div style={{ paddingTop: "64px" }}>{children}</div>
    </div>
  );
}