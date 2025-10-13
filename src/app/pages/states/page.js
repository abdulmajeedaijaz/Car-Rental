"use client";

import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const States = () => {
    const [states, setStates] = useState([
        { id: 1, stateName: "Punjab", code: "PB" },
        { id: 2, stateName: "Sindh", code: "SD" },
        { id: 3, stateName: "KPK", code: "KP" },
    ]);

    const [visible, setVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedState, setSelectedState] = useState(null);
    const [formData, setFormData] = useState({ stateName: "", code: "" });
    const toast = useRef(null);
    const [nextId, setNextId] = useState(4);

    const validate = () => {
        if (!formData.stateName.trim()) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "State Name is required", life: 3000 });
            return false;
        }
        if (!formData.code.trim()) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "Code is required", life: 3000 });
            return false;
        }
        return true;
    };

    const addState = () => {
        setIsEdit(false);
        setFormData({ stateName: "", code: "" });
        setVisible(true);
    };

    const editStateData = (state) => {
        setIsEdit(true);
        setSelectedState(state);
        setFormData({ stateName: state.stateName, code: state.code });
        setVisible(true);
    };

    const saveState = () => {
        if (!validate()) return;

        if (isEdit) {
            const updatedStates = states.map((s) => (s.id === selectedState.id ? { ...s, ...formData } : s));
            setStates(updatedStates);
            toast.current.show({ severity: "success", summary: "Updated", detail: `${formData.stateName} updated successfully`, life: 3000 });
        } else {
            setStates([...states, { id: nextId, ...formData }]);
            setNextId(nextId + 1);
            toast.current.show({ severity: "success", summary: "Added", detail: `${formData.stateName} added successfully`, life: 3000 });
        }

        setVisible(false);
        setSelectedState(null);
    };

    const actionBodyTemplate = (rowData) => (
        <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-text p-button-purple"
            onClick={() => editStateData(rowData)}
            aria-label="Edit State"
        />
    );

    return (
        <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
            <Toast ref={toast} />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>States</h2>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                 <span>✔ 10 Active</span> | <span>✗ 12 Inactive</span> | <span>≣ 22 Total States </span>

                    </div>
                </div>
                <Button
                    label="Add State"
                    icon="pi pi-plus"
                    style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
                    onClick={addState}
                />
            </div>

            {/* DataTable Card */}
            <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <DataTable
                    value={states}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    dataKey="id"
                    emptyMessage="No states found"
                    responsiveLayout="scroll"
                >
                    <Column field="stateName" header="State Name" sortable />
                    <Column field="code" header="Code" sortable />
                    <Column header="Actions" body={actionBodyTemplate} style={{ width: "80px", textAlign: "center" }} />
                </DataTable>
            </div>

            {/* Sidebar */}
            <Sidebar
                visible={visible}
                position="right"
                onHide={() => { setVisible(false); setSelectedState(null); }}
                style={{ width: "30rem" }}
            >
                <h3>{isEdit ? "Edit State" : "Add State"}</h3>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="stateName">State Name *</label>
                        <InputText
                            id="stateName"
                            value={formData.stateName}
                            onChange={(e) => setFormData({ ...formData, stateName: e.target.value })}
                            placeholder="Enter state name"
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="code">Code *</label>
                        <InputText
                            id="code"
                            value={formData.code}
                            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                            placeholder="Enter state code"
                        />
                    </div>
                    <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                        <Button
                            label="Cancel"
                            icon="pi pi-times"
                            className="p-button-secondary"
                            onClick={() => { setVisible(false); setSelectedState(null); }}
                        />
                        <Button
                            label="Save"
                            icon="pi pi-check"
                            className="p-button-success"
                            onClick={saveState}
                        />
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default States;
