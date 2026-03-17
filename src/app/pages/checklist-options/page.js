'use client';

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const ChecklistOptions = () => {
  const categoryOptions = [
    { label: 'Safety', value: 'Safety' },
    { label: 'Maintenance', value: 'Maintenance' },
    { label: 'Compliance', value: 'Compliance' },
  ];

  const [options, setOptions] = useState([
    { id: 1, name: 'Fire Extinguisher Check', category: 'Safety', status: 'active' },
    { id: 2, name: 'Equipment Lubrication', category: 'Maintenance', status: 'active' },
    { id: 3, name: 'Regulatory Review', category: 'Compliance', status: 'inactive' },
  ]);

  const [addSidebarVisible, setAddSidebarVisible] = useState(false);
  const [editSidebarVisible, setEditSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: null });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e, field) => setFormData({ ...formData, [field]: e.target.value });
  const handleDropdownChange = (e) => setFormData({ ...formData, category: e.value });

  const openAddSidebar = () => {
    setFormData({ name: '', category: null });
    setAddSidebarVisible(true);
  };

  const openEditSidebar = (option) => {
    setSelectedOption(option);
    setFormData({ name: option.name, category: option.category });
    setEditSidebarVisible(true);
  };

  const saveAddOption = () => {
    if (!formData.name || !formData.category) return;
    const newOption = {
      id: options.length + 1,
      name: formData.name,
      category: formData.category,
      status: 'active',
    };
    setOptions([...options, newOption]);
    setAddSidebarVisible(false);
    setFormData({ name: '', category: null });
  };

  const saveEditOption = () => {
    if (!formData.name || !formData.category) return;
    setOptions(
      options.map((opt) =>
        opt.id === selectedOption.id
          ? { ...opt, name: formData.name, category: formData.category }
          : opt
      )
    );
    setEditSidebarVisible(false);
    setFormData({ name: '', category: null });
    setSelectedOption(null);
  };

  const deleteOption = (id) => setOptions(options.filter((opt) => opt.id !== id));

  const actionsTemplate = (rowData) => (
    <div className="p-d-flex p-ai-center" style={{ gap: '5px' }}>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text"
        style={{ color: '#9333EA' }}
        onClick={() => openEditSidebar(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text"
        style={{ color: '#DC2626' }}
        onClick={() => deleteOption(rowData.id)}
      />
    </div>
  );

  const activeCount = options.filter((opt) => opt.status === 'active').length;
  const inactiveCount = options.filter((opt) => opt.status === 'inactive').length;
  const totalCount = options.length;

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '2rem', color: '#333' }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Checklist Options</h2>
          <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            <span>✓ {activeCount} Active</span> | <span>✗ {inactiveCount} Inactive</span> | <span>≣ {totalCount} Total Options</span>
          </div>
        </div>
        <Button
          label="Add Option"
          icon="pi pi-plus"
          style={{
            background: "#a855f7",
            borderColor: "#a855f7",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(168, 85, 247, 0.3)"
          }}
          onClick={openAddSidebar}
        />
      </div>

      {/* DataTable */}
      <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={options}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          dataKey="id"
          emptyMessage="No options found"
        >
          <Column field="name" header="Option Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column header="Actions" body={actionsTemplate} style={{ width: "120px", textAlign: "center" }} />
        </DataTable>
      </div>

      {/* Add Sidebar */}
      <Sidebar visible={addSidebarVisible} position="right" onHide={() => setAddSidebarVisible(false)} style={{ width: "30rem" }}>
        <h3>Add Option</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Option Name</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              placeholder="Enter option name"
            />
          </div>
          <div className="p-field">
            <label htmlFor="category">Category</label>
            <Dropdown
              id="category"
              value={formData.category}
              options={categoryOptions}
              onChange={handleDropdownChange}
              placeholder="Select category"
            />
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => setAddSidebarVisible(false)} />
            <Button label="Save" icon="pi pi-check" className="p-button-success" onClick={saveAddOption} />
          </div>
        </div>
      </Sidebar>

      {/* Edit Sidebar */}
      <Sidebar visible={editSidebarVisible} position="right" onHide={() => setEditSidebarVisible(false)} style={{ width: "30rem" }}>
        <h3>Edit Option</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Option Name</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              placeholder="Enter option name"
            />
          </div>
          <div className="p-field">
            <label htmlFor="category">Category</label>
            <Dropdown
              id="category"
              value={formData.category}
              options={categoryOptions}
              onChange={handleDropdownChange}
              placeholder="Select category"
            />
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => setEditSidebarVisible(false)} />
            <Button label="Save" icon="pi pi-check" className="p-button-success" onClick={saveEditOption} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ChecklistOptions;
