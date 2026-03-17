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

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/customers");
      if (!res.ok) throw new Error("Failed to load customers");
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load customers",
      });
    } finally {
      setLoading(false);
    }
  };



  const actionTemplate = (row) => (
    <Button
      icon="pi pi-eye"
      className="p-button-rounded p-button-text p-button-info"
      onClick={() => {
        setSelectedCustomer(row);
        setDetailsVisible(true);
      }}
      title="View Details"
    />
  );

  const statusBody = (row) => (
    <span className={`p-tag ${row.is_active ? "p-tag-success" : "p-tag-danger"}`}>
      {row.is_active ? "Active" : "Inactive"}
    </span>
  );

  const cityBody = (row) => row.city?.name || "-";

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem" }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Customers</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>Manage and view customer details</p>
      </div>

      <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={customers}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          emptyMessage={loading ? "Loading customers..." : "No customers found"}
          responsiveLayout="scroll"
          dataKey="id"
          stripedRows
        >
          <Column field="name" header="Name" sortable />
          <Column field="email_id" header="Email" sortable />
          <Column field="mobile_number" header="Mobile" />
          <Column header="City" body={cityBody} />
          <Column header="Status" body={statusBody} />
          <Column header="Actions" body={actionTemplate} style={{ width: "100px", textAlign: "center" }} />
        </DataTable>
      </Card>

      <Sidebar
        visible={detailsVisible}
        position="right"
        style={{ width: "45rem" }}
        onHide={() => setDetailsVisible(false)}
        header="Customer Details"
      >
        {selectedCustomer && (
          <div style={{ paddingBottom: "2rem" }}>
            {/* Personal Information */}
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Personal Information
              </h4>
              <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Full Name</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Email</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.email_id}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Mobile Number</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.mobile_number}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Alternate Mobile</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.alternate_mobile_number || "-"}
                  </p>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Address</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.address || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Pin Code</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.pin_code || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>City</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.city?.name || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>State</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedCustomer.state?.name || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Status</p>
                  <span className={`p-tag ${selectedCustomer.is_active ? "p-tag-success" : "p-tag-danger"}`}>
                    {selectedCustomer.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Documents
              </h4>

              {/* Aadhar */}
              <div style={{ background: "#f0f9ff", padding: "1.5rem", borderRadius: "8px", marginBottom: "1rem", border: "1px solid #bfdbfe" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: "600", color: "#1e40af", margin: 0, marginBottom: "1rem" }}>
                  Aadhar Number
                </p>
                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: "0 0 1rem 0" }}>
                  {selectedCustomer.adhaar_number || "-"}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selectedCustomer.adhar_front_image && (
                    <a
                      href={selectedCustomer.adhar_front_image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#3b82f6",
                        color: "white",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <i className="pi pi-image" /> View Front
                    </a>
                  )}
                  {selectedCustomer.adhar_back_image && (
                    <a
                      href={selectedCustomer.adhar_back_image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#3b82f6",
                        color: "white",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <i className="pi pi-image" /> View Back
                    </a>
                  )}
                </div>
              </div>

              {/* Driving License */}
              <div style={{ background: "#f0fdf4", padding: "1.5rem", borderRadius: "8px", marginBottom: "1rem", border: "1px solid #bbf7d0" }}>
                <p style={{ fontSize: "0.95rem", fontWeight: "600", color: "#166534", margin: 0, marginBottom: "1rem" }}>
                  Driving License Number
                </p>
                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: "0 0 1rem 0" }}>
                  {selectedCustomer.driving_license_number || "-"}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selectedCustomer.driving_license_front_image && (
                    <a
                      href={selectedCustomer.driving_license_front_image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#10b981",
                        color: "white",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <i className="pi pi-image" /> View Front
                    </a>
                  )}
                  {selectedCustomer.driving_license_back_image && (
                    <a
                      href={selectedCustomer.driving_license_back_image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "#10b981",
                        color: "white",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <i className="pi pi-image" /> View Back
                    </a>
                  )}
                </div>
              </div>

              {/* Profile Image */}
              {selectedCustomer.profile_image && (
                <div style={{ background: "#faf5ff", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e9d5ff", textAlign: "center" }}>
                  <p style={{ fontSize: "0.95rem", fontWeight: "600", color: "#7e22ce", margin: "0 0 1rem 0" }}>
                    Profile Image
                  </p>
                  <img
                    src={selectedCustomer.profile_image}
                    alt={selectedCustomer.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "300px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Close Button */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                label="Close"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => setDetailsVisible(false)}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}
