"use client";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function SupportPage() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [replyText, setReplyText] = useState("");
  const toast = useRef(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/support-tickets");
      if (!res.ok) throw new Error("Failed to load tickets");
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load tickets",
      });
    } finally {
      setLoading(false);
    }
  };

  const statusBody = (row) => {
    const statusColors = {
      open: "p-tag-danger",
      "in-progress": "p-tag-warning",
      closed: "p-tag-success",
    };
    return <span className={`p-tag ${statusColors[row.status]}`}>{row.status.toUpperCase()}</span>;
  };

  const priorityBody = (row) => {
    const priorityColors = {
      high: "p-tag-danger",
      medium: "p-tag-warning",
      low: "p-tag-info",
    };
    return <span className={`p-tag ${priorityColors[row.priority]}`}>{row.priority.toUpperCase()}</span>;
  };

  const actionTemplate = (row) => (
    <Button
      icon="pi pi-eye"
      className="p-button-rounded p-button-text p-button-info"
      onClick={() => {
        setSelectedTicket(row);
        setDetailsVisible(true);
        setReplyText("");
      }}
      title="View Details"
    />
  );

  const handleReply = async () => {
    if (!replyText.trim()) {
      toast.current?.show({
        severity: "warn",
        summary: "Warning",
        detail: "Please enter a reply",
      });
      return;
    }
    
    try {
      // Update ticket with new reply count
      const updatedTicket = {
        id: selectedTicket.id,
        replies: (selectedTicket.replies || 0) + 1
      };
      
      const res = await fetch("/api/v1/support-tickets", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTicket)
      });

      if (!res.ok) throw new Error("Failed to send reply");

      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Reply sent successfully",
      });
      setReplyText("");
      fetchTickets(); // Refresh to get updated data
    } catch (err) {
      console.error("Error:", err);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to send reply",
      });
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem" }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>Support Tickets</h2>
        <p style={{ margin: "0.5rem 0 0 0", color: "#6b7280" }}>Manage customer support requests</p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        <Card style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Total Tickets</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>{tickets.length}</p>
          </div>
        </Card>
        <Card style={{ background: "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Open</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>
              {tickets.filter((t) => t.status === "open").length}
            </p>
          </div>
        </Card>
        <Card style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>In Progress</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>
              {tickets.filter((t) => t.status === "in-progress").length}
            </p>
          </div>
        </Card>
        <Card style={{ background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", color: "white" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>Closed</p>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>
              {tickets.filter((t) => t.status === "closed").length}
            </p>
          </div>
        </Card>
      </div>

      {/* Tickets Table */}
      <Card style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={tickets}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 20]}
          loading={loading}
          emptyMessage="No tickets found"
          responsiveLayout="scroll"
          dataKey="id"
          stripedRows
        >
          <Column field="id" header="Ticket ID" sortable />
          <Column field="title" header="Title" />
          <Column field="customer" header="Customer" />
          <Column header="Status" body={statusBody} />
          <Column header="Priority" body={priorityBody} />
          <Column field="replies" header="Replies" />
          <Column header="Actions" body={actionTemplate} style={{ width: "100px", textAlign: "center" }} />
        </DataTable>
      </Card>

      {/* Ticket Details Sidebar */}
      <Sidebar
        visible={detailsVisible}
        position="right"
        style={{ width: "45rem" }}
        onHide={() => setDetailsVisible(false)}
        header="Ticket Details"
      >
        {selectedTicket && (
          <div style={{ paddingBottom: "2rem" }}>
            <div style={{ background: "#f9fafb", padding: "1.5rem", borderRadius: "8px", marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>{selectedTicket.title}</h3>
                  <p style={{ margin: 0, color: "#6b7280" }}>Ticket #{selectedTicket.id}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <span className={`p-tag ${statusBody(selectedTicket).props.className}`}>
                    {selectedTicket.status.toUpperCase()}
                  </span>
                  <span className={`p-tag ${priorityBody(selectedTicket).props.className}`}>
                    {selectedTicket.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: 0 }}>Customer</p>
                  <p style={{ fontWeight: "600", margin: "0.25rem 0 0 0" }}>{selectedTicket.customer}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: 0 }}>Created</p>
                  <p style={{ fontWeight: "600", margin: "0.25rem 0 0 0" }}>
                    {new Date(selectedTicket.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Description
              </h4>
              <p style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "6px", margin: 0 }}>
                {selectedTicket.description}
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Add Reply
              </h4>
              <InputTextarea
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={4}
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                label="Send Reply"
                icon="pi pi-send"
                className="p-button-success"
                onClick={handleReply}
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
