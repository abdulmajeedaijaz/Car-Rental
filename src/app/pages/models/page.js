"use client";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Models = () => {
    const [models, setModels] = useState([
        { id: 1, modelName: "Camry", brand: "Toyota" },
        { id: 2, modelName: "Civic", brand: "Honda" },
        { id: 3, modelName: "Focus", brand: "Ford" },
    ]);

    const [visible, setVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);
    const [formData, setFormData] = useState({ modelName: "", brand: "" });
    const [brands] = useState(["Toyota", "Honda", "Ford"]);
    const [nextId, setNextId] = useState(4);
    const toast = useRef(null);

    useEffect(() => {
        if (selectedModel) {
            setFormData({ modelName: selectedModel.modelName, brand: selectedModel.brand });
        } else {
            setFormData({ modelName: "", brand: "" });
        }
    }, [selectedModel]);

    const validate = () => {
        if (!formData.modelName.trim()) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "Model Name is required", life: 3000 });
            return false;
        }
        if (!formData.brand) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "Brand is required", life: 3000 });
            return false;
        }
        return true;
    };

    const addModel = () => {
        setIsEdit(false);
        setSelectedModel(null);
        setVisible(true);
    };

    const editModel = (model) => {
        setIsEdit(true);
        setSelectedModel(model);
        setVisible(true);
    };

    const saveModel = () => {
        if (!validate()) return;

        const updatedModels = [...models];
        if (isEdit) {
            const index = updatedModels.findIndex((m) => m.id === selectedModel.id);
            updatedModels[index] = { ...updatedModels[index], ...formData };
            toast.current.show({ severity: "success", summary: "Updated", detail: `${formData.modelName} updated successfully`, life: 3000 });
        } else {
            updatedModels.push({ id: nextId, ...formData });
            setNextId(nextId + 1);
            toast.current.show({ severity: "success", summary: "Added", detail: `${formData.modelName} added successfully`, life: 3000 });
        }
        setModels(updatedModels);
        setVisible(false);
        setSelectedModel(null);
    };

    const actionBodyTemplate = (rowData) => (
        <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-text p-button-purple"
            onClick={() => editModel(rowData)}
            aria-label="Edit Model"
        />
    );

    return (
        <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
            <Toast ref={toast} />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Models</h2>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                      <span>✔ 10 Active</span> | <span>✗ 12 Inactive</span> | <span>≣ 22 Total Variants</span>                 
                  </div>
                </div>
                <Button
                    label="Add Model"
                    icon="pi pi-plus"
                    style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
                    onClick={addModel}
                />
            </div>

            {/* DataTable Card */}
            <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <DataTable
                    value={models}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    dataKey="id"
                    emptyMessage="No models found"
                    responsiveLayout="scroll"
                >
                    <Column field="modelName" header="Model Name" sortable />
                    <Column field="brand" header="Brand" sortable />
                    <Column header="Actions" body={actionBodyTemplate} style={{ width: "80px", textAlign: "center" }} />
                </DataTable>
            </div>

            {/* Sidebar */}
            <Sidebar
                visible={visible}
                position="right"
                onHide={() => { setVisible(false); setSelectedModel(null); }}
                style={{ width: "30rem" }}
            >
                <h3>{isEdit ? "Edit Model" : "Add Model"}</h3>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="modelName">Model Name *</label>
                        <InputText
                            id="modelName"
                            value={formData.modelName}
                            onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
                            placeholder="Enter model name"
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="brand">Brand *</label>
                        <Dropdown
                            id="brand"
                            value={formData.brand}
                            options={brands}
                            onChange={(e) => setFormData({ ...formData, brand: e.value })}
                            placeholder="Select a brand"
                        />
                    </div>
                    <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                        <Button
                            label="Cancel"
                            icon="pi pi-times"
                            className="p-button-secondary"
                            onClick={() => { setVisible(false); setSelectedModel(null); }}
                        />
                        <Button
                            label="Save"
                            icon="pi pi-check"
                            className="p-button-success"
                            onClick={saveModel}
                        />
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Models;
