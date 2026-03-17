"use client";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function InvoicePage() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/bookings");
      if (!res.ok) throw new Error("Failed to load invoices");
      const data = await res.json();
      setInvoices(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load invoices",
      });
    } finally {
      setLoading(false);
    }
  };

  const actionTemplate = (row) => (
    <Button
      icon="pi pi-file-pdf"
      className="p-button-rounded p-button-text p-button-info"
      onClick={() => {
        setSelectedInvoice(row);
        setDetailsVisible(true);
      }}
      title="View Invoice"
    />
  );

  const statusBody = (row) => (
    <span className={`p-tag ${row.booking_status_id === "confirmed" ? "p-tag-success" : "p-tag-warning"}`}>
      {row.booking_status_id || "Pending"}
    </span>
  );

  const amountBody = (row) => {
    const days = Math.ceil((new Date(row.end_time) - new Date(row.start_time)) / (1000 * 60 * 60 * 24));
    const amount = days * (row.vehicle?.pricePerDay || 0);
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem" }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Invoices</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>View and manage booking invoices</p>
      </div>

      <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={invoices}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          emptyMessage={loading ? "Loading invoices..." : "No invoices found"}
          responsiveLayout="scroll"
          dataKey="id"
          stripedRows
        >
          <Column field="booking_number" header="Booking #" sortable />
          <Column field="customer.name" header="Customer" />
          <Column field="vehicle.brand" header="Vehicle" />
          <Column header="Amount" body={amountBody} />
          <Column header="Status" body={statusBody} />
          <Column header="Actions" body={actionTemplate} style={{ width: "100px", textAlign: "center" }} />
        </DataTable>
      </Card>

      <Sidebar
        visible={detailsVisible}
        position="right"
        style={{ width: "45rem" }}
        onHide={() => setDetailsVisible(false)}
        header="Invoice Details"
      >
        {selectedInvoice && (
          <div style={{ paddingBottom: "2rem" }}>
            <div style={{ marginBottom: "2rem", background: "#f9fafb", padding: "1.5rem", borderRadius: "8px" }}>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Invoice #{selectedInvoice.booking_number}
              </h4>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Customer</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedInvoice.customer?.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Email</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedInvoice.customer?.email_id}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Vehicle</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedInvoice.vehicle?.brand} {selectedInvoice.vehicle?.model}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Daily Rate</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#10b981", margin: 0 }}>
                    ₹{selectedInvoice.vehicle?.pricePerDay?.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Start Date</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {new Date(selectedInvoice.start_time).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>End Date</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {new Date(selectedInvoice.end_time).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Total Days</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {Math.ceil((new Date(selectedInvoice.end_time) - new Date(selectedInvoice.start_time)) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Total Amount</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#3b82f6", margin: 0 }}>
                    ₹{(Math.ceil((new Date(selectedInvoice.end_time) - new Date(selectedInvoice.start_time)) / (1000 * 60 * 60 * 24)) * (selectedInvoice.vehicle?.pricePerDay || 0)).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Status</p>
                  <span className={`p-tag ${selectedInvoice.booking_status_id === "confirmed" ? "p-tag-success" : "p-tag-warning"}`}>
                    {selectedInvoice.booking_status_id || "Pending"}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                label="Download PDF"
                icon="pi pi-download"
                className="p-button-success"
                onClick={() => alert("PDF download functionality to be implemented")}
              />
              <Button
                label="Close"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => setDetailsVisible(false)}
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}
