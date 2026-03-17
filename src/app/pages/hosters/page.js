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

export default function HostersPage() {
  const [hosters, setHosters] = useState([]);
  const [selectedHoster, setSelectedHoster] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    fetchHosters();
  }, []);

  const fetchHosters = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/providers");
      if (!res.ok) throw new Error("Failed to load hosters");
      const data = await res.json();
      setHosters(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load hosters",
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
        setSelectedHoster(row);
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
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Hosters</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>Manage vehicle hosts and providers</p>
      </div>

      <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={hosters}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          emptyMessage={loading ? "Loading hosters..." : "No hosters found"}
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
        header="Hoster Details"
      >
        {selectedHoster && (
          <div style={{ paddingBottom: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Basic Information
              </h4>
              <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Full Name</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedHoster.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Email</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedHoster.email_id}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Mobile</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedHoster.mobile_number}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>City</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedHoster.city?.name || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>State</p>
                  <p style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                    {selectedHoster.state?.name || "-"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "0 0 0.5rem 0" }}>Status</p>
                  <span className={`p-tag ${selectedHoster.is_active ? "p-tag-success" : "p-tag-danger"}`}>
                    {selectedHoster.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>

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
