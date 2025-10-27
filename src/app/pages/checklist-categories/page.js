'use client';

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const ChecklistCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Safety', description: 'Safety measures and procedures', status: 'active' },
    { id: 2, name: 'Maintenance', description: 'Maintenance schedules', status: 'active' },
    { id: 3, name: 'Compliance', description: 'Regulatory compliance', status: 'inactive' },
  ]);

  const [addSidebarVisible, setAddSidebarVisible] = useState(false);
  const [editSidebarVisible, setEditSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const openAddSidebar = () => {
    setFormData({ name: '', description: '' });
    setAddSidebarVisible(true);
  };

  const openEditSidebar = (category) => {
    setSelectedCategory(category);
    setFormData({ name: category.name, description: category.description });
    setEditSidebarVisible(true);
  };

  const saveAddCategory = () => {
    if (!formData.name || !formData.description) return;
    const newCategory = {
      id: categories.length + 1,
      name: formData.name,
      description: formData.description,
      status: 'active',
    };
    setCategories([...categories, newCategory]);
    setAddSidebarVisible(false);
    setFormData({ name: '', description: '' });
  };

  const saveEditCategory = () => {
    if (!formData.name || !formData.description) return;
    setCategories(
      categories.map((cat) =>
        cat.id === selectedCategory.id
          ? { ...cat, name: formData.name, description: formData.description }
          : cat
      )
    );
    setEditSidebarVisible(false);
    setFormData({ name: '', description: '' });
    setSelectedCategory(null);
  };

  const deleteCategory = (categoryId) => {
    setCategories(categories.filter((cat) => cat.id !== categoryId));
  };

  const actionsTemplate = (rowData) => (
    <div className="p-d-flex p-ai-center" style={{ gap: '5px' }}>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text p-button-purple"
        onClick={() => openEditSidebar(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger"
        onClick={() => deleteCategory(rowData.id)}
      />
    </div>
  );

  const activeCount = categories.filter((cat) => cat.status === 'active').length;
  const inactiveCount = categories.filter((cat) => cat.status === 'inactive').length;
  const totalCount = categories.length;

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '2rem', color: '#333' }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0" }}>Checklist Categories</h2>
          <div style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            <span>✓ {activeCount} Active</span> | <span>✗ {inactiveCount} Inactive</span> | <span>≣ {totalCount}Total Checklist Categories</span>
          </div>
        </div>
        <Button
          label="Add Category"
          icon="pi pi-plus"
          style={{ background: "#a855f7", borderColor: "#a855f7", color: "white" }}
          onClick={openAddSidebar}
        />
      </div>

      {/* DataTable */}
      <div style={{ background: "#ffffff", borderRadius: "8px", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <DataTable
          value={categories}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          dataKey="id"
          emptyMessage="No categories found"
        >
          <Column field="name" header="Category Name" sortable />
          <Column field="description" header="Description" sortable />
          <Column header="Actions" body={actionsTemplate} style={{ width: "120px", textAlign: "center" }} />
        </DataTable>
      </div>

      {/* Add Sidebar */}
      <Sidebar visible={addSidebarVisible} position="right" onHide={() => setAddSidebarVisible(false)} style={{ width: "30rem" }}>
        <h3>{'Add Category'}</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Category Name</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              placeholder="Enter category name"
            />
          </div>
          <div className="p-field">
            <label htmlFor="description">Description</label>
            <InputText
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange(e, 'description')}
              placeholder="Enter description"
            />
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => setAddSidebarVisible(false)} />
            <Button label="Save" icon="pi pi-check" className="p-button-success" onClick={saveAddCategory} />
          </div>
        </div>
      </Sidebar>

      {/* Edit Sidebar */}
      <Sidebar visible={editSidebarVisible} position="right" onHide={() => setEditSidebarVisible(false)} style={{ width: "30rem" }}>
        <h3>{'Edit Category'}</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="name">Category Name</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              placeholder="Enter category name"
            />
          </div>
          <div className="p-field">
            <label htmlFor="description">Description</label>
            <InputText
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange(e, 'description')}
              placeholder="Enter description"
            />
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={() => setEditSidebarVisible(false)} />
            <Button label="Save" icon="pi pi-check" className="p-button-success" onClick={saveEditCategory} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ChecklistCategories;
