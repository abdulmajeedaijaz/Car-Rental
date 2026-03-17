"use client";

import React, { useState, useRef, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { ProgressBar } from "primereact/progressbar";
import { Badge } from "primereact/badge";
import { Tooltip } from "primereact/tooltip";
import { Avatar } from "primereact/avatar";
import { Chip } from "primereact/chip";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Enhanced sample vehicles with more realistic data
const sampleVehicles = [
  { 
    id: 101, 
    owner: "Ali Rehman", 
    brand: "Toyota", 
    model: "Corolla", 
    year: 2019, 
    seats: 5, 
    pricePerDay: 2500, 
    status: "Pending", 
    submittedAt: "2025-10-10", 
    images: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop"], 
    notes: "Recently serviced. Good condition with full service history. No accidents reported.",
    location: "Karachi",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "45,000 km"
  },
  { 
    id: 102, 
    owner: "Sara Ahmed", 
    brand: "Honda", 
    model: "City", 
    year: 2020, 
    seats: 5, 
    pricePerDay: 2700, 
    status: "Pending", 
    submittedAt: "2025-10-08", 
    images: ["https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=250&fit=crop"], 
    notes: "Minor scratch on rear bumper. Regular maintenance done. All documents verified.",
    location: "Lahore",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "32,000 km"
  },
  { 
    id: 103, 
    owner: "Omar Khalid", 
    brand: "Suzuki", 
    model: "Swift", 
    year: 2018, 
    seats: 5, 
    pricePerDay: 1800, 
    status: "Pending", 
    submittedAt: "2025-10-05", 
    images: ["https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&h=250&fit=crop"], 
    notes: "Full service history available. New tires installed last month. Well maintained.",
    location: "Islamabad",
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "68,000 km"
  },
  { 
    id: 104, 
    owner: "Fatima Khan", 
    brand: "Toyota", 
    model: "Fortuner", 
    year: 2021, 
    seats: 7, 
    pricePerDay: 4500, 
    status: "Pending", 
    submittedAt: "2025-10-03", 
    images: ["https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop"], 
    notes: "Premium SUV in excellent condition. All features working perfectly.",
    location: "Rawalpindi",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "25,000 km"
  },
];

export default function PendingVehiclesPage() {
  const [vehicles, setVehicles] = useState(sampleVehicles);
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const pendingVehicles = useMemo(() => 
    vehicles.filter(v => v.status === "Pending"), 
    [vehicles]
  );

  // Status options with colors and icons
  const statusOptions = [
    { label: "All Status", value: null },
    { label: "Pending", value: "Pending", icon: "pi pi-clock", color: "#ff9800" },
    { label: "Approved", value: "Approved", icon: "pi pi-check", color: "#4caf50" },
    { label: "Rejected", value: "Rejected", icon: "pi pi-times", color: "#f44336" }
  ];

  // Status Tag Template
  const statusBodyTemplate = (rowData) => {
    const statusConfig = {
      Approved: { color: "#22c55e", icon: "pi pi-check" },
      Pending: { color: "#f59e0b", icon: "pi pi-clock" },
      Rejected: { color: "#ef4444", icon: "pi pi-times" }
    };
    
    const config = statusConfig[rowData.status];
    return (
      <Tag 
        value={rowData.status} 
        icon={config.icon}
        style={{ 
          background: config.color, 
          color: "#fff", 
          fontWeight: "bold",
          padding: "0.25rem 0.75rem",
          borderRadius: "12px"
        }} 
      />
    );
  };

  // Price Template
  const priceBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-2">
      <i className="pi pi-tag text-sm"></i>
      <span className="font-bold" style={{ color: '#10b981' }}>
        ₹{rowData.pricePerDay.toLocaleString()}
        <small className="text-xs text-500 block">per day</small>
      </span>
    </div>
  );

  // Vehicle Info Template
  const vehicleBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-3">
      <Avatar 
        image={rowData.images[0]} 
        shape="circle" 
        size="large" 
        className="shadow-2"
        imageAlt={`${rowData.brand} ${rowData.model}`}
      />
      <div>
        <div className="font-bold text-lg">{rowData.brand} {rowData.model}</div>
        <div className="text-sm text-600">{rowData.year} • {rowData.seats} seats</div>
      </div>
    </div>
  );

  // Owner Template
  const ownerBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-2">
      <Avatar 
        label={rowData.owner.split(' ').map(n => n[0]).join('')} 
        shape="circle" 
        size="normal"
        className="bg-primary"
        style={{ color: 'white' }}
      />
      <span className="font-medium">{rowData.owner}</span>
    </div>
  );

  // Action Buttons Template
  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <Button 
        icon="pi pi-eye" 
        className="p-button-text p-button-info" 
        onClick={() => viewVehicle(rowData)} 
        tooltip="View Details"
        tooltipOptions={{ position: 'top' }}
      />
      <Button 
        icon="pi pi-check" 
        className="p-button-success p-button-rounded p-button-outlined" 
        onClick={() => confirmApprove(rowData)} 
        tooltip="Approve"
        tooltipOptions={{ position: 'top' }}
      />
      <Button 
        icon="pi pi-times" 
        className="p-button-danger p-button-rounded p-button-outlined" 
        onClick={() => confirmReject(rowData)} 
        tooltip="Reject"
        tooltipOptions={{ position: 'top' }}
      />
    </div>
  );

  // View vehicle in sidebar
  const viewVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setSidebarVisible(true);
  };

  // Update vehicle status with loading state
  const updateStatus = async (vehicleId, status) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setVehicles(prev => prev.map(v => v.id === vehicleId ? { ...v, status } : v));
    toast.current?.show({ 
      severity: status === "Approved" ? "success" : "warn", 
      summary: `${status}`, 
      detail: `Vehicle ${vehicleId} has been ${status.toLowerCase()}`,
      life: 3000 
    });
    setSidebarVisible(false);
    setLoading(false);
  };

  const confirmApprove = (vehicle) => confirmDialog({
    message: `Are you sure you want to approve ${vehicle.brand} ${vehicle.model}? This will make it available for booking.`,
    header: "Confirm Approval",
    icon: "pi pi-check-circle",
    acceptClassName: "p-button-success",
    accept: () => updateStatus(vehicle.id, "Approved"),
  });

  const confirmReject = (vehicle) => confirmDialog({
    message: `Are you sure you want to reject ${vehicle.brand} ${vehicle.model}? The owner will be notified.`,
    header: "Confirm Rejection",
    icon: "pi pi-exclamation-circle",
    acceptClassName: "p-button-danger",
    accept: () => updateStatus(vehicle.id, "Rejected"),
  });

  // Bulk actions
  const handleBulkApprove = () => {
    confirmDialog({
      message: `This will approve all ${pendingVehicles.length} pending vehicles. Continue?`,
      header: "Bulk Approval",
      icon: "pi pi-check-circle",
      acceptClassName: "p-button-success",
      accept: () => {
        setVehicles(prev => prev.map(v => v.status === "Pending" ? { ...v, status: "Approved" } : v));
        toast.current?.show({ 
          severity: "success", 
          summary: "Bulk Approved", 
          detail: `${pendingVehicles.length} vehicles have been approved`,
          life: 3000 
        });
      }
    });
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      toast.current?.show({ 
        severity: 'info', 
        summary: 'Refreshed', 
        detail: 'Pending list updated', 
        life: 2000 
      });
      setLoading(false);
    }, 1000);
  };

  const header = (
    <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between gap-4">
      <div className="flex flex-column lg:flex-row lg:align-items-center gap-4" style={{ flex: 1 }}>
        <div className="p-input-icon-left" style={{ minWidth: '300px' }}>
          <i className="pi pi-search" />
          <InputText 
            placeholder="Search vehicles, owners, brands..." 
            value={globalFilter} 
            onChange={(e) => setGlobalFilter(e.target.value)} 
            style={{ width: "100%" }} 
          />
        </div>
        <Dropdown 
          value={statusFilter} 
          options={statusOptions} 
          optionLabel="label"
          onChange={(e) => setStatusFilter(e.value)} 
          placeholder="Filter by Status"
          style={{ minWidth: '200px' }}
        />
      </div>
      <div className="flex gap-2">
        <Button 
          label="Refresh" 
          icon="pi pi-refresh" 
          className="p-button-outlined" 
          onClick={handleRefresh}
          loading={loading}
        />
        <Button 
          label="Export" 
          icon="pi pi-download" 
          className="p-button-outlined" 
          onClick={() => toast.current?.show({ severity: 'info', summary: 'Export', detail: 'Data exported successfully' })}
        />
      </div>
    </div>
  );

  // Filter vehicles by search and status
  const filteredVehicles = useMemo(() => {
    return pendingVehicles.filter(v => {
      const query = globalFilter.toLowerCase();
      const matchesSearch = 
        String(v.id).includes(query) || 
        v.owner.toLowerCase().includes(query) || 
        v.brand.toLowerCase().includes(query) || 
        v.model.toLowerCase().includes(query) ||
        v.location.toLowerCase().includes(query);
      
      const matchesStatus = statusFilter ? v.status === statusFilter : true;
      return matchesSearch && matchesStatus;
    });
  }, [pendingVehicles, globalFilter, statusFilter]);

  return (
    <div className="surface-ground min-h-screen" style={{ padding: "2rem" }}>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Tooltip target=".action-btn" />

      {/* Page Header */}
      <div className="mb-4">
        <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between mb-4">
          <div>
            <div className="flex align-items-center gap-3 mb-2">
              <i className="pi pi-clock text-3xl text-blue-500"></i>
              <div>
                <h1 className="text-3xl font-bold m-0 text-900">Pending Vehicles</h1>
                <p className="text-600 m-0">Manage vehicle approval requests</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 lg:mt-0">
            <div className="flex align-items-center gap-2 bg-white p-3 border-round" style={{ minWidth: '160px' }}>
              <Badge value={pendingVehicles.length} severity="warning"></Badge>
              <span className="font-medium">Pending</span>
            </div>
            <Button 
              label="Approve All" 
              icon="pi pi-check" 
              className="p-button-success" 
              onClick={handleBulkApprove}
              disabled={pendingVehicles.length === 0}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <Card className="shadow-1 border-1 surface-card">
              <div className="flex justify-content-between align-items-center">
                <div>
                  <span className="block text-600 font-medium mb-1">Total Pending</span>
                  <div className="text-900 font-bold text-2xl">{pendingVehicles.length}</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <i className="pi pi-clock text-blue-500 text-xl"></i>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card className="shadow-1 border-1 surface-card">
              <div className="flex justify-content-between align-items-center">
                <div>
                  <span className="block text-600 font-medium mb-1">This Week</span>
                  <div className="text-900 font-bold text-2xl">4</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-green-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <i className="pi pi-calendar text-green-500 text-xl"></i>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card className="shadow-1 border-1 surface-card">
              <div className="flex justify-content-between align-items-center">
                <div>
                  <span className="block text-600 font-medium mb-1">Avg. Response</span>
                  <div className="text-900 font-bold text-2xl">2.1d</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <i className="pi pi-history text-orange-500 text-xl"></i>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <Card className="shadow-1 border-1 surface-card">
              <div className="flex justify-content-between align-items-center">
                <div>
                  <span className="block text-600 font-medium mb-1">Completion</span>
                  <div className="text-900 font-bold text-2xl">68%</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <i className="pi pi-chart-line text-purple-500 text-xl"></i>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* DataTable */}
      <Card className="shadow-2 border-1 surface-card">
        {loading && <ProgressBar mode="indeterminate" style={{ height: '4px' }} />}
        <DataTable
          value={filteredVehicles}
          header={header}
          paginator
          rows={8}
          responsiveLayout="stack"
          breakpoint="960px"
          rowHover
          loading={loading}
          emptyMessage="No pending vehicles found"
          className="p-datatable-striped p-datatable-sm"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowsPerPageOptions={[5, 8, 12, 20]}
        >
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column header="Vehicle" body={vehicleBodyTemplate} sortable sortField="brand" />
          <Column header="Owner" body={ownerBodyTemplate} sortable sortField="owner" />
          <Column field="location" header="Location" sortable style={{ width: '130px' }} />
          <Column field="mileage" header="Mileage" sortable style={{ width: '120px' }} />
          <Column header="Price" body={priceBodyTemplate} sortable sortField="pricePerDay" style={{ width: '120px' }} />
          <Column field="submittedAt" header="Submitted" sortable style={{ width: '130px' }} />
          <Column header="Status" body={statusBodyTemplate} sortable sortField="status" style={{ width: '130px' }} />
          <Column header="Actions" body={actionTemplate} style={{ width: '180px' }} />
        </DataTable>
      </Card>

      {/* Sidebar for vehicle details */}
      <Sidebar 
        visible={sidebarVisible} 
        position="right" 
        onHide={() => setSidebarVisible(false)} 
        className="w-full md:w-30rem lg:w-40rem"
        blockScroll
      >
        {selectedVehicle && (
          <div className="h-full flex flex-column">
            <div className="flex align-items-center gap-3 mb-4">
              <i className="pi pi-car text-2xl text-primary"></i>
              <h2 className="text-2xl font-bold m-0">Vehicle Details</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {/* Vehicle Image */}
              <div className="mb-4">
                <img 
                  src={selectedVehicle.images[0]} 
                  alt={`${selectedVehicle.brand} ${selectedVehicle.model}`} 
                  className="w-full border-round shadow-2" 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>

              {/* Basic Info */}
              <div className="grid mb-4">
                <div className="col-12">
                  <h3 className="text-xl font-bold m-0">{selectedVehicle.brand} {selectedVehicle.model}</h3>
                  <p className="text-600 m-0">{selectedVehicle.year} • {selectedVehicle.seats} seats</p>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid mb-4">
                <div className="col-6">
                  <div className="text-sm text-600">Fuel Type</div>
                  <div className="font-medium">{selectedVehicle.fuelType}</div>
                </div>
                <div className="col-6">
                  <div className="text-sm text-600">Transmission</div>
                  <div className="font-medium">{selectedVehicle.transmission}</div>
                </div>
                <div className="col-6">
                  <div className="text-sm text-600">Mileage</div>
                  <div className="font-medium">{selectedVehicle.mileage}</div>
                </div>
                <div className="col-6">
                  <div className="text-sm text-600">Location</div>
                  <div className="font-medium">{selectedVehicle.location}</div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-blue-50 p-3 border-round mb-4">
                <div className="flex justify-content-between align-items-center">
                  <div>
                    <div className="text-sm text-600">Daily Rate</div>
                    <div className="text-2xl font-bold text-blue-600">₹{selectedVehicle.pricePerDay.toLocaleString()}</div>
                  </div>
                  <i className="pi pi-tag text-2xl text-blue-500"></i>
                </div>
              </div>

              {/* Owner Info */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Owner Information</h4>
                <div className="flex align-items-center gap-3 p-3 border-1 surface-border border-round">
                  <Avatar 
                    label={selectedVehicle.owner.split(' ').map(n => n[0]).join('')} 
                    size="large"
                    className="bg-primary"
                    style={{ color: 'white' }}
                  />
                  <div>
                    <div className="font-bold">{selectedVehicle.owner}</div>
                    <div className="text-sm text-600">Submitted: {selectedVehicle.submittedAt}</div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Additional Notes</h4>
                <div className="p-3 bg-gray-50 border-round">
                  <p className="m-0 text-700">{selectedVehicle.notes}</p>
                </div>
              </div>

              {/* Status */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Current Status</h4>
                {statusBodyTemplate(selectedVehicle)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4 border-top-1 surface-border">
              <Button 
                label="Reject" 
                icon="pi pi-times" 
                className="p-button-danger flex-1" 
                onClick={() => confirmReject(selectedVehicle)}
                severity="danger"
              />
              <Button 
                label="Approve" 
                icon="pi pi-check" 
                className="p-button-success flex-1" 
                onClick={() => confirmApprove(selectedVehicle)}
                severity="success"
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}