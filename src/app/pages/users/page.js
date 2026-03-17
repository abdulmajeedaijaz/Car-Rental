"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Message } from "primereact/message";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Sample data
const initialUsers = [
  { id: 1, name: "Ali Rehman", email: "ali@example.com", role: "ADMIN", status: "Active" },
  { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "HOSTER", status: "Inactive" },
  { id: 3, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },
  { id: 4, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },
  { id: 5, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },
  { id: 6, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },
  { id: 7, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },
  { id: 8, name: "Omar Khalid", email: "omar@example.com", role: "CUSTOMER", status: "Active" },


];

const roles = [
  { label: "ADMIN", value: "ADMIN" },
  { label: "HOSTER", value: "HOSTER" },
  { label: "CUSTOMER", value: "CUSTOMER" },
  { label: "User", value: "User" }
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const toast = React.useRef(null);

  // Reset form errors
  const resetFormErrors = () => {
    setFormErrors({});
  };

  // Validation
  const validate = () => {
    const errors = {};
    if (!selectedUser?.name?.trim()) {
      errors.name = "Name is required";
    }
    if (!selectedUser?.email?.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(selectedUser.email)) {
      errors.email = "Enter a valid email";
    }
    if (!selectedUser?.role) {
      errors.role = "Role is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Edit user
  const editUser = (user) => {
    setSelectedUser({ ...user });
    setIsEdit(true);
    resetFormErrors();
    setVisible(true);
  };

  // Delete user with confirmation
  const deleteUser = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      setUsers(users.filter((u) => u.id !== user.id));
      toast.current.show({ 
        severity: "success", 
        summary: "Deleted", 
        detail: `${user.name} removed`, 
        life: 3000 
      });
      setVisible(false);
    }
  };

  // Add new user - FIXED
  const addUser = () => {
    setSelectedUser({ id: null, name: "", email: "", role: null, status: "Active" });
    setIsEdit(false);
    resetFormErrors();
    setVisible(true);
  };

  // Save user - FIXED
  const saveUser = () => {
    if (!validate()) {
      toast.current.show({ 
        severity: "error", 
        summary: "Validation Error", 
        detail: "Please fix the errors in the form", 
        life: 3000 
      });
      return;
    }

    try {
      if (isEdit && selectedUser.id) {
        // Update existing user
        setUsers(users.map((u) => 
          u.id === selectedUser.id ? { ...selectedUser } : u
        ));
        toast.current.show({ 
          severity: "success", 
          summary: "Updated", 
          detail: `${selectedUser.name} updated successfully`, 
          life: 3000 
        });
      } else {
        // Add new user
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        const newUser = { 
          ...selectedUser, 
          id: newId, 
          status: "Active" 
        };
        setUsers([...users, newUser]);
        toast.current.show({ 
          severity: "success", 
          summary: "Added", 
          detail: `${selectedUser.name} added successfully`, 
          life: 3000 
        });
      }
      setVisible(false);
      setSelectedUser(null);
    } catch (error) {
      toast.current.show({ 
        severity: "error", 
        summary: "Error", 
        detail: "Failed to save user", 
        life: 3000 
      });
    }
  };

  // Action template with ellipsis
  const actionTemplate = (rowData) => (
    <Button
      icon="pi pi-ellipsis-v"
      className="p-button-rounded p-button-text p-button-purple"
      onClick={() => editUser(rowData)}
      aria-label="User actions"
    />
  );

  // Status body template
  const statusBodyTemplate = (rowData) => {
    const statusClass = rowData.status === "Active" ? "p-tag-success" : "p-tag-danger";
    return <span className={`p-tag ${statusClass}`}>{rowData.status}</span>;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
      <Toast ref={toast} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Users</h2>
          <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            <span>✔ 33 Active</span> | <span>✗ 23 Inactive</span> | <span>≣ 56 Total Users</span>
          </div>
        </div>
        <Button
          label="Add User"
          icon="pi pi-plus"
          style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
          onClick={addUser}
        />
      </div>

      {/* DataTable */}
      <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={users}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          dataKey="id"
          emptyMessage="No users found"
        >
          <Column field="name" header="Name" sortable />
          <Column field="email" header="Email" sortable />
          <Column field="role" header="Role" sortable />
          <Column header="Status" body={statusBodyTemplate} />
          <Column header="Actions" body={actionTemplate} style={{ width: "80px", textAlign: "center" }} />
        </DataTable>
      </div>

      {/* Sidebar for Add/Edit */}
      <Sidebar visible={visible} position="right" onHide={() => {
        setVisible(false);
        setSelectedUser(null);
        resetFormErrors();
      }} style={{ width: "30rem" }}>
        <h3>{isEdit ? "Edit User" : "Add User"}</h3>
        
        {selectedUser && (
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="name">Name *</label>
              <InputText
                id="name"
                value={selectedUser.name || ""}
                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                className={formErrors.name ? "p-invalid" : ""}
                placeholder="Enter user name"
              />
              {formErrors.name && <small className="p-error">{formErrors.name}</small>}
            </div>
            
            <div className="p-field">
              <label htmlFor="email">Email *</label>
              <InputText
                id="email"
                type="email"
                value={selectedUser.email || ""}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                className={formErrors.email ? "p-invalid" : ""}
                placeholder="Enter email address"
              />
              {formErrors.email && <small className="p-error">{formErrors.email}</small>}
            </div>
            
            <div className="p-field">
              <label htmlFor="role">Role *</label>
              <Dropdown
                id="role"
                value={selectedUser.role}
                options={roles}
                optionLabel="label"
                optionValue="value"
                onChange={(e) => setSelectedUser({ ...selectedUser, role: e.value })}
                placeholder="Select a role"
                className={formErrors.role ? "p-invalid" : ""}
              />
              {formErrors.role && <small className="p-error">{formErrors.role}</small>}
            </div>
            
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => {
                  setVisible(false);
                  setSelectedUser(null);
                  resetFormErrors();
                }}
              />
              {isEdit && (
                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  className="p-button-danger"
                  onClick={() => deleteUser(selectedUser)}
                />
              )}
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-success"
                onClick={saveUser}
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}