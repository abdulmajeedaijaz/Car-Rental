"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Message } from "primereact/message";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export default function SettingsPage() {
  const [settings, setSettings] = useState([
    { name: "site_name", value: "Taajeer Assayaarat", type: "String" },
    { name: "support_email", value: "support@taajeer.com", type: "String" },
    { name: "timezone", value: "Asia/Karachi", type: "String" },
  ]);

  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [formData, setFormData] = useState({ name: "", value: "", type: "String" });
  const [error, setError] = useState("");

  const typeOptions = [
    { label: "String", value: "String" },
    { label: "Number", value: "Number" },
    { label: "Boolean", value: "Boolean" },
  ];

  const handleAddClick = () => {
    setFormData({ name: "", value: "", type: "String" });
    setError("");
    setAddVisible(true);
  };

  const handleEditClick = (setting) => {
    setSelectedSetting(setting);
    setFormData({ name: setting.name, value: setting.value, type: setting.type });
    setError("");
    setEditVisible(true);
  };

  const handleSave = (isEdit = false) => {
    if (!formData.name.trim() || !formData.value.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (isEdit) {
      const updated = settings.map((item) =>
        item.name === selectedSetting.name ? formData : item
      );
      setSettings(updated);
      setEditVisible(false);
    } else {
      setSettings([...settings, formData]);
      setAddVisible(false);
    }

    setFormData({ name: "", value: "", type: "String" });
    setError("");
  };

  const actionBodyTemplate = (rowData) => (
    <Button
      icon="pi pi-pencil"
      className="p-button-rounded p-button-text p-button-sm"
      style={{ color: "#9B51E0" }}
      onClick={() => handleEditClick(rowData)}
    />
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: 0 }}>Settings</h2>
         
        </div>
        <Button
          label="Add Setting"
          icon="pi pi-plus"
          style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
          onClick={handleAddClick}
        />
      </div>

      {/* DataTable */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <DataTable
          value={settings}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          emptyMessage="No settings found"
        >
          <Column field="name" header="Name" sortable />
          <Column field="value" header="Value" sortable />
          <Column field="type" header="Data Type" sortable />
          <Column header="Actions" body={actionBodyTemplate} style={{ width: "80px" }} />
        </DataTable>
      </div>

      {/* Add Sidebar */}
      <Sidebar
        visible={addVisible}
        position="right"
        onHide={() => setAddVisible(false)}
        style={{ width: "30rem" }}
      >
        <h3>Add Setting</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label>Name</label>
            <InputText
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter setting name"
            />
          </div>

          <div className="p-field">
            <label>Value</label>
            <InputText
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              placeholder="Enter value"
            />
          </div>

          <div className="p-field">
            <label>Data Type</label>
            <Dropdown
              value={formData.type}
              options={typeOptions}
              onChange={(e) => setFormData({ ...formData, type: e.value })}
              placeholder="Select data type"
            />
          </div>

          {error && <Message severity="error" text={error} />}

          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="p-button-secondary"
              onClick={() => setAddVisible(false)}
            />
            <Button
              label="Save"
              icon="pi pi-check"
              className="p-button-success"
              style={{ background: "#9B51E0", borderColor: "#9B51E0", marginLeft: "10px" }}
              onClick={() => handleSave(false)}
            />
          </div>
        </div>
      </Sidebar>

      {/* Edit Sidebar */}
      <Sidebar
        visible={editVisible}
        position="right"
        onHide={() => setEditVisible(false)}
        style={{ width: "30rem" }}
      >
        <h3>Edit Setting</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label>Name</label>
            <InputText value={formData.name} disabled />
          </div>

          <div className="p-field">
            <label>Value</label>
            <InputText
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              placeholder="Enter new value"
            />
          </div>

          <div className="p-field">
            <label>Data Type</label>
            <Dropdown
              value={formData.type}
              options={typeOptions}
              onChange={(e) => setFormData({ ...formData, type: e.value })}
              placeholder="Select data type"
            />
          </div>

          {error && <Message severity="error" text={error} />}

          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="p-button-secondary"
              onClick={() => setEditVisible(false)}
            />
            <Button
              label="Save"
              icon="pi pi-check"
              className="p-button-success"
              style={{ background: "#9B51E0", borderColor: "#9B51E0", marginLeft: "10px" }}
              onClick={() => handleSave(true)}
            />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
