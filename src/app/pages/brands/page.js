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
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Toyota",
      logo: "https://brand.toyota.com/content/dam/brandhub/guidelines/logo/four-column/BHUB_Logo_ColorVariations_SingleColor_03.svg",
      active: true,
    },
    {
      id: 2,
      name: "Honda",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
      active: true,
    },
    {
      id: 3,
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
      active: false,
    },
  ]);

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
  }, [selectedBrand]);

  const imageBodyTemplate = (rowData) => (
    <img
      src={rowData.logo}
      alt={rowData.name}
      style={{ width: "50px", height: "auto" }}
    />
  );

  const activeBodyTemplate = (rowData) => (rowData.active ? "Yes" : "No");

  const actionBodyTemplate = (rowData) => (
    <Button
      icon="pi pi-pencil"
      className="p-button-rounded p-button-text"
      onClick={() => editBrand(rowData)}
    />
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
    const updatedBrands = [...brands];
    const logo = preview || "";

    if (isEdit) {
      const index = updatedBrands.findIndex((b) => b.id === selectedBrand.id);
      updatedBrands[index] = { ...updatedBrands[index], ...formData, logo };
    } else {
      updatedBrands.push({ id: nextId, ...formData, logo });
      setNextId(nextId + 1);
    }

    setBrands(updatedBrands);
    setVisible(false);
  };

  const onFileSelect = (e) => {
    if (e.files && e.files[0]) {
      setPreview(URL.createObjectURL(e.files[0]));
    }
  };

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