"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { FileUpload } from "primereact/fileupload";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const Brands = () => {
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [formData, setFormData] = useState({ name: "", active: true });
  const [preview, setPreview] = useState(null);
  const [nextId, setNextId] = useState(4);

  const activeCount = brands.filter((b) => b.active).length;
  const inactiveCount = brands.length - activeCount;

  useEffect(() => {
    if (selectedBrand) {
      setFormData({ name: selectedBrand.name, active: selectedBrand.active });
      setPreview(selectedBrand.logo);
    } else {
      setFormData({ name: "", active: true });
      setPreview(null);
    }
    // load list when panel hides/opens or selection changes
  }, [selectedBrand]);

  useEffect(() => {
    fetchBrands()
  }, [])

  // Load brands from API
  async function fetchBrands() {
    setLoading(true)
    try {
      const res = await fetch('/api/v1/brands')
      if (!res.ok) throw new Error(`Failed to load (${res.status})`)
      const data = await res.json()

      // Map API brands to include UI-only fields (logo/active)
      const mapped = data.map((b, i) => ({
        id: b.id,
        name: b.name,
        // keep existing preview or use a placeholder image
        logo: `https://picsum.photos/seed/brand-${encodeURIComponent(b.id)} /80/40`,
        active: true,
      }))
      setBrands(mapped)
    } catch (err) {
      console.error('fetchBrands error', err)
    } finally {
      setLoading(false)
    }
  }

  const imageBodyTemplate = (rowData) => (
    <img
      src={rowData.logo}
      alt={rowData.name}
      style={{ width: "50px", height: "auto" }}
    />
  );

  const activeBodyTemplate = (rowData) => (rowData.active ? "Yes" : "No");

  const actionBodyTemplate = (rowData) => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text"
        onClick={() => editBrand(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-text"
        onClick={() => confirmDelete(rowData)}
      />
    </div>
  );

  const addBrand = () => {
    setIsEdit(false);
    setSelectedBrand(null);
    setVisible(true);
  };

  const editBrand = (brand) => {
    setIsEdit(true);
    setSelectedBrand(brand);
    setVisible(true);
  };

  const saveBrand = () => {
    ;(async () => {
      const logo = preview || ''
      try {
        if (isEdit) {
          const res = await fetch('/api/v1/brands', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: selectedBrand.id, name: formData.name }),
          })
          if (!res.ok) throw new Error('Update failed')
          const updated = await res.json()

          setBrands((prev) => prev.map((b) => (b.id === updated.id ? { ...b, name: updated.name, logo, active: formData.active } : b)))
        } else {
          const res = await fetch('/api/v1/brands', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: formData.name }),
          })
          if (!res.ok) throw new Error('Create failed')
          const created = await res.json()
          setBrands((prev) => [...prev, { id: created.id, name: created.name, logo, active: formData.active }])
        }
      } catch (err) {
        console.error('saveBrand error', err)
        // optionally show toast
      } finally {
        setVisible(false)
      }
    })()
  };

  const onFileSelect = (e) => {
    if (e.files && e.files[0]) {
      setPreview(URL.createObjectURL(e.files[0]));
    }
  };

  function confirmDelete(rowData) {
    if (!confirm(`Delete brand "${rowData.name}"?`)) return
    ;(async () => {
      try {
        const res = await fetch(`/api/v1/brands?id=${encodeURIComponent(rowData.id)}`, { method: 'DELETE' })
        if (!res.ok) throw new Error('Delete failed')
        setBrands((prev) => prev.filter((b) => b.id !== rowData.id))
      } catch (err) {
        console.error('delete error', err)
      }
    })()
  }

  return (
    <div className="p-3">
      <h2 style={
        {
          fontWeight: "bold",
          fontSize: "25px",
        }
      }>Brands</h2>
      <div className="flex justify-content-between align-items-center mb-3">
        <div>
          <span className="mr-3">
            <i className="pi pi-check text-green-500" /> {activeCount} Active
          </span>
          <span className="mr-3">
            <i className="pi pi-times text-red-500" /> {inactiveCount} Inactive
          </span>
          <span>
            <i className="pi pi-list" /> {brands.length} Total Brands
          </span>
        </div>
        <Button
          label="Add Brand"
          icon="pi pi-plus"
          className="p-button-primary"
          onClick={addBrand}
        />
      </div>
      <DataTable
        value={brands}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        tableStyle={{ minWidth: "50rem" }}
        loading={loading}
      >
        <Column header="Image" body={imageBodyTemplate} />
        <Column field="name" header="Name" />
        <Column header="Active" body={activeBodyTemplate} />
        <Column header="Actions" body={actionBodyTemplate} style={{ width: "5rem" }} />
      </DataTable>

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="p-sidebar-md"
      >
        <h3>{isEdit ? "Edit Brand" : "Add Brand"}</h3>
        <div className="p-fluid">
          <div className="field">
            <label htmlFor="name">Brand Name</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label>Logo</label>
            <FileUpload
              mode="advanced"
              chooseLabel="Choose"
              uploadLabel="Upload"
              cancelLabel="Cancel"
              customUpload
              onSelect={onFileSelect}
              accept="image/*"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{ width: "100px", height: "auto", marginTop: "10px" }}
              />
            )}
            {!preview && <p>Drag and drop files here to upload.</p>}
          </div>
          <div className="field-checkbox">
            <Checkbox
              inputId="active"
              checked={formData.active}
              onChange={(e) =>
                setFormData({ ...formData, active: e.checked })
              }
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex justify-content-end">
            <Button
              label="Cancel"
              className="p-button-secondary mr-2"
              onClick={() => setVisible(false)}
            />
            <Button label="Save" className="p-button-primary" onClick={saveBrand} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Brands;
