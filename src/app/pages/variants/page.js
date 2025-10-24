"use client";

import React, { useState } from "react";
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

const initialVariants = [
  { id: 1, variantName: "Altis", model: "Corolla" },
  { id: 2, variantName: "Altis", model: "Corolla" },
  { id: 3, variantName: "VTEC", model: "Civic" },
];

const models = ["Corolla", "Civic", "Camry"];

export default function VariantsPage() {
  const [variants, setVariants] = useState(initialVariants);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const toast = React.useRef(null);

  const resetFormErrors = () => setFormErrors({});

  const validate = () => {
    const errors = {};
    if (!selectedVariant?.variantName?.trim()) errors.variantName = "Variant Name is required";
    if (!selectedVariant?.model) errors.model = "Model is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addVariant = () => {
    setSelectedVariant({ id: null, variantName: "", model: "" });
    setIsEdit(false);
    resetFormErrors();
    setVisibleSidebar(true);
  };

  const editVariantHandler = (variant) => {
    setSelectedVariant({ ...variant });
    setIsEdit(true);
    resetFormErrors();
    setVisibleSidebar(true);
  };

  const saveVariant = () => {
    if (!validate()) {
      toast.current.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please fill all required fields",
        life: 3000,
      });
      return;
    }

    if (isEdit && selectedVariant.id) {
      setVariants(
        variants.map((v) => (v.id === selectedVariant.id ? { ...selectedVariant } : v))
      );
      toast.current.show({
        severity: "success",
        summary: "Updated",
        detail: `${selectedVariant.variantName} updated successfully`,
        life: 3000,
      });
    } else {
      const newId = variants.length ? Math.max(...variants.map((v) => v.id)) + 1 : 1;
      setVariants([...variants, { ...selectedVariant, id: newId }]);
      toast.current.show({
        severity: "success",
        summary: "Added",
        detail: `${selectedVariant.variantName} added successfully`,
        life: 3000,
      });
    }

    setVisibleSidebar(false);
    setSelectedVariant(null);
  };

  const deleteVariant = (variant) => {
    if (window.confirm(`Are you sure you want to delete ${variant.variantName}?`)) {
      setVariants(variants.filter((v) => v.id !== variant.id));
      toast.current.show({
        severity: "success",
        summary: "Deleted",
        detail: `${variant.variantName} removed`,
        life: 3000,
      });
      setVisibleSidebar(false);
    }
  };

  const actionTemplate = (rowData) => (
    <Button
      icon="pi pi-ellipsis-v"
      className="p-button-rounded p-button-text p-button-purple"
      onClick={() => editVariantHandler(rowData)}
    />
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", padding: "2rem", color: "#333" }}>
      <Toast ref={toast} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Variants</h2>
          <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            <span>✔ 10 Active</span> | <span>✗ 12 Inactive</span> | <span>≣ 22 Total Variants</span>
          </div>
        </div>
        <Button
          label="Add Variant"
          icon="pi pi-plus"
          style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
          onClick={addVariant}
        />
      </div>

      {/* DataTable Card */}
      <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={variants}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          dataKey="id"
          emptyMessage="No variants found"
        >
          <Column field="variantName" header="Variant Name" sortable />
          <Column field="model" header="Model" sortable />
          <Column header="Actions" body={actionTemplate} style={{ width: "80px", textAlign: "center" }} />
        </DataTable>
      </div>

      {/* Sidebar for Add/Edit */}
      <Sidebar
        visible={visibleSidebar}
        position="right"
        onHide={() => {
          setVisibleSidebar(false);
          setSelectedVariant(null);
          resetFormErrors();
        }}
        style={{ width: "30rem" }}
      >
        <h3>{isEdit ? "Edit Variant" : "Add Variant"}</h3>
        {selectedVariant && (
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="variantName">Variant Name *</label>
              <InputText
                id="variantName"
                value={selectedVariant.variantName || ""}
                onChange={(e) => setSelectedVariant({ ...selectedVariant, variantName: e.target.value })}
                className={formErrors.variantName ? "p-invalid" : ""}
                placeholder="Enter variant name"
              />
              {formErrors.variantName && <small className="p-error">{formErrors.variantName}</small>}
            </div>

            <div className="p-field">
              <label htmlFor="model">Model *</label>
              <Dropdown
                id="model"
                value={selectedVariant.model || ""}
                options={models}
                onChange={(e) => setSelectedVariant({ ...selectedVariant, model: e.value })}
                placeholder="Select a model"
                className={formErrors.model ? "p-invalid" : ""}
              />
              {formErrors.model && <small className="p-error">{formErrors.model}</small>}
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
                onClick={() => {
                  setVisibleSidebar(false);
                  setSelectedVariant(null);
                  resetFormErrors();
                }}
              />
              {isEdit && (
                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  className="p-button-danger"
                  onClick={() => deleteVariant(selectedVariant)}
                />
              )}
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-success"
                onClick={saveVariant}
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}
