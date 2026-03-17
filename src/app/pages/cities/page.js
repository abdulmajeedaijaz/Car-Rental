"use client";

import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Cities = () => {
    const [cities, setCities] = useState([
        { id: 1, cityName: "Lahore", state: "Punjab" },
        { id: 2, cityName: "Karachi", state: "Sindh" },
        { id: 3, cityName: "Peshawar", state: "KPK" },
    ]);

    const [visible, setVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [formData, setFormData] = useState({ cityName: "", state: "" });
    const toast = useRef(null);
    const [nextId, setNextId] = useState(4);
    const statesOptions = ["Punjab", "Sindh", "KPK"];

    const validate = () => {
        if (!formData.cityName.trim()) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "City Name is required", life: 3000 });
            return false;
        }
        if (!formData.state) {
            toast.current.show({ severity: "error", summary: "Validation Error", detail: "State is required", life: 3000 });
            return false;
        }
        return true;
    };

    const addCity = () => {
        setIsEdit(false);
        setFormData({ cityName: "", state: "" });
        setVisible(true);
    };

    const editCityData = (city) => {
        setIsEdit(true);
        setSelectedCity(city);
        setFormData({ cityName: city.cityName, state: city.state });
        setVisible(true);
    };

    const saveCity = () => {
        if (!validate()) return;

        if (isEdit) {
            const updatedCities = cities.map((c) => (c.id === selectedCity.id ? { ...c, ...formData } : c));
            setCities(updatedCities);
            toast.current.show({ severity: "success", summary: "Updated", detail: `${formData.cityName} updated successfully`, life: 3000 });
        } else {
            setCities([...cities, { id: nextId, ...formData }]);
            setNextId(nextId + 1);
            toast.current.show({ severity: "success", summary: "Added", detail: `${formData.cityName} added successfully`, life: 3000 });
        }

        setVisible(false);
        setSelectedCity(null);
    };

    const actionBodyTemplate = (rowData) => (
        <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-text p-button-purple"
            onClick={() => editCityData(rowData)}
            aria-label="Edit City"
        />
    );

    return (
        <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
            <Toast ref={toast} />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                    <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Cities</h2>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
      <span>✔ 10 Active</span> | <span>✗ 12 Inactive</span> | <span>≣ {cities.length} Total Cities</span>

                    </div>
                </div>
                <Button
                    label="Add City"
                    icon="pi pi-plus"
                    style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
                    onClick={addCity}
                />
            </div>

            {/* DataTable Card */}
            <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <DataTable
                    value={cities}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    dataKey="id"
                    emptyMessage="No cities found"
                    responsiveLayout="scroll"
                >
                    <Column field="cityName" header="City Name" sortable />
                    <Column field="state" header="State" sortable />
                    <Column header="Actions" body={actionBodyTemplate} style={{ width: "80px", textAlign: "center" }} />
                </DataTable>
            </div>

            {/* Sidebar */}
            <Sidebar
                visible={visible}
                position="right"
                onHide={() => { setVisible(false); setSelectedCity(null); }}
                style={{ width: "30rem" }}
            >
                <h3>{isEdit ? "Edit City" : "Add City"}</h3>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="cityName">City Name *</label>
                        <InputText
                            id="cityName"
                            value={formData.cityName}
                            onChange={(e) => setFormData({ ...formData, cityName: e.target.value })}
                            placeholder="Enter city name"
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="state">State *</label>
                        <Dropdown
                            id="state"
                            value={formData.state}
                            options={statesOptions}
                            onChange={(e) => setFormData({ ...formData, state: e.value })}
                            placeholder="Select a state"
                        />
                    </div>
                    <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                        <Button
                            label="Cancel"
                            icon="pi pi-times"
                            className="p-button-secondary"
                            onClick={() => { setVisible(false); setSelectedCity(null); }}
                        />
                        <Button
                            label="Save"
                            icon="pi pi-check"
                            className="p-button-success"
                            onClick={saveCity}
                        />
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Cities;
