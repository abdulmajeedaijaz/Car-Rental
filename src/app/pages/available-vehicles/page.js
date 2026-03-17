"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const AvailableVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [detailSidebarVisible, setDetailSidebarVisible] = useState(false);
  const [bookingSidebarVisible, setBookingSidebarVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState(null);
  const [transmissionFilter, setTransmissionFilter] = useState(null);
  const [priceRangeFilter, setPriceRangeFilter] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [bookingForm, setBookingForm] = useState({ customer_id: "", start_time: "", end_time: "", notes: "" });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingErrors, setBookingErrors] = useState({});
  const [createdBooking, setCreatedBooking] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    fetchAvailableVehicles();
    fetchCustomers();
  }, []);

  const fetchAvailableVehicles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/available-vehicles");
      if (!res.ok) throw new Error("Failed to load vehicles");
      const data = await res.json();
      setVehicles(data || []);
    } catch (err) {
      console.error("fetchAvailableVehicles", err);
      toast.current?.show({ severity: "error", summary: "Error", detail: "Failed to load available vehicles", life: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await fetch("/api/v1/customers");
      if (!res.ok) return;
      const data = await res.json();
      setCustomers(data || []);
    } catch (err) {
      console.error("fetchCustomers", err);
    }
  };

  const fuelOptions = [
    { label: "All Fuel", value: null },
    { label: "Petrol", value: "Petrol" },
    { label: "Diesel", value: "Diesel" },
    { label: "Hybrid", value: "Hybrid" },
  ];

  const transmissionOptions = [
    { label: "All Transmission", value: null },
    { label: "Automatic", value: "Automatic" },
    { label: "Manual", value: "Manual" },
  ];

  const priceRangeOptions = [
    { label: "All Prices", value: null },
    { label: "Under ₹2000", value: [0, 2000] },
    { label: "₹2000 - ₹3000", value: [2000, 3000] },
    { label: "₹3000 - ₹4000", value: [3000, 4000] },
    { label: "Above ₹4000", value: [4000, Infinity] },
  ];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const searchLower = (globalFilter || "").toLowerCase();
      const matchesSearch =
        String(v.id).includes(searchLower) ||
        (v.brand || "").toLowerCase().includes(searchLower) ||
        (v.model || "").toLowerCase().includes(searchLower) ||
        (v.owner || "").toLowerCase().includes(searchLower) ||
        (v.location || "").toLowerCase().includes(searchLower);

      const matchesFuel = !fuelFilter || v.fuelType === fuelFilter;
      const matchesTransmission = !transmissionFilter || v.transmission === transmissionFilter;
      const matchesPrice = !priceRangeFilter || (v.pricePerDay >= priceRangeFilter[0] && v.pricePerDay <= priceRangeFilter[1]);

      return matchesSearch && matchesFuel && matchesTransmission && matchesPrice;
    });
  }, [vehicles, globalFilter, fuelFilter, transmissionFilter, priceRangeFilter]);

  const vehicleBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-3">
      <Avatar image={rowData.images?.[0]} shape="circle" size="large" className="shadow-2" imageAlt={`${rowData.brand} ${rowData.model}`} />
      <div>
        <div className="font-bold text-lg">{rowData.brand} {rowData.model}</div>
        <div className="text-sm text-600">{rowData.year} • {rowData.seats} seats</div>
      </div>
    </div>
  );

  const locationBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-2"><i className="pi pi-map-marker text-lg text-red-500"></i><span className="font-medium">{rowData.location}</span></div>
  );

  const priceBodyTemplate = (rowData) => (
    <div className="flex align-items-center gap-2"><i className="pi pi-tag text-lg text-green-500"></i><span className="font-bold text-lg text-green-600">₹{rowData.pricePerDay.toLocaleString()}</span><small className="text-xs text-500">/day</small></div>
  );

  const specsBodyTemplate = (rowData) => (
    <div className="flex gap-2"><Tag value={rowData.fuelType} style={{ background: '#3B82F6', color: 'white' }} icon="pi pi-fw pi-bolt" /><Tag value={rowData.transmission} style={{ background: '#8B5CF6', color: 'white' }} icon="pi pi-fw pi-cog" /></div>
  );

  const actionTemplate = (rowData) => (
    <div className="flex gap-2">
      <Button icon="pi pi-eye" className="p-button-rounded p-button-info" onClick={() => { setSelectedVehicle(rowData); setDetailSidebarVisible(true); }} tooltip="View Details" tooltipOptions={{ position: 'top' }} />
      <Button icon="pi pi-calendar" className="p-button-rounded p-button-success" onClick={() => { setSelectedVehicle(rowData); setBookingForm({ customer_id: '', start_time: '', end_time: '', notes: '' }); setBookingErrors({}); setCreatedBooking(null); setBookingSidebarVisible(true); }} tooltip="Book Now" tooltipOptions={{ position: 'top' }} />
    </div>
  );

  const header = (
    <div className="p-fluid">
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3"><div className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder="Search by brand, model, owner..." value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} style={{ width: '100%' }} /></div></div>
        <div className="col-12 md:col-6 lg:col-3"><Dropdown value={fuelFilter} options={fuelOptions} onChange={(e) => setFuelFilter(e.value)} optionLabel="label" optionValue="value" placeholder="Filter by Fuel" style={{ width: '100%' }} /></div>
        <div className="col-12 md:col-6 lg:col-3"><Dropdown value={transmissionFilter} options={transmissionOptions} onChange={(e) => setTransmissionFilter(e.value)} optionLabel="label" optionValue="value" placeholder="Filter by Transmission" style={{ width: '100%' }} /></div>
        <div className="col-12 md:col-6 lg:col-3"><Dropdown value={priceRangeFilter} options={priceRangeOptions} onChange={(e) => setPriceRangeFilter(e.value)} optionLabel="label" optionValue="value" placeholder="Filter by Price" style={{ width: '100%' }} /></div>
      </div>
    </div>
  );

  const stats = [
    { label: 'Total Available', value: filteredVehicles.length, icon: 'pi pi-car', color: '#3B82F6' },
    { label: 'Average Price', value: `₹${filteredVehicles.length > 0 ? Math.round(filteredVehicles.reduce((sum, v) => sum + v.pricePerDay, 0) / filteredVehicles.length).toLocaleString() : 0}/day`, icon: 'pi pi-tag', color: '#10B981' },
    { label: 'Locations', value: new Set(filteredVehicles.map((v) => v.location)).size, icon: 'pi pi-map-marker', color: '#F59E0B' },
  ];

  const createBooking = async () => {
    setBookingErrors({});
    if (!bookingForm.customer_id) { setBookingErrors({ customer_id: 'Customer is required' }); return; }
    if (!bookingForm.start_time) { setBookingErrors(prev => ({ ...prev, start_time: 'Start date is required' })); return; }
    if (!bookingForm.end_time) { setBookingErrors(prev => ({ ...prev, end_time: 'End date is required' })); return; }

    setBookingLoading(true);
    try {
      const res = await fetch('/api/v1/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vehicle_id: selectedVehicle.id, customer_id: bookingForm.customer_id, start_time: new Date(bookingForm.start_time).toISOString(), end_time: new Date(bookingForm.end_time).toISOString(), booking_status_id: 'Pending', booking_number: `BK-${Date.now()}` }) });
      if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.error || 'Failed to create booking'); }
      const booking = await res.json();
      setCreatedBooking({ ...booking, vehicle: selectedVehicle, customer: customers.find(c => c.id === bookingForm.customer_id) });
      toast.current?.show({ severity: 'success', summary: 'Booking Created', detail: `Successfully booked ${selectedVehicle.brand} ${selectedVehicle.model}`, life: 3000 });
    } catch (err) { console.error('createBooking', err); toast.current?.show({ severity: 'error', summary: 'Error', detail: err.message || 'Failed to create booking', life: 3000 }); }
    finally { setBookingLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '2rem' }}>
      <Toast ref={toast} />

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 1rem 0', color: '#1f2937' }}>Available Vehicles</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Browse and book from our fleet of {vehicles.length} approved vehicles</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {stats.map((stat, idx) => (
          <Card key={idx} style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{stat.label}</p>
                <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: stat.color, margin: 0 }}>{stat.value}</p>
              </div>
              <i className={`${stat.icon} text-4xl`} style={{ color: stat.color, opacity: 0.2 }}></i>
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <DataTable value={filteredVehicles} header={header} paginator rows={10} rowsPerPageOptions={[5, 10, 20, 50]} responsiveLayout="scroll" dataKey="id" emptyMessage={loading ? 'Loading...' : 'No vehicles found'} loading={loading} className="p-datatable-striped">
          <Column header="Vehicle" body={vehicleBodyTemplate} sortable sortField="brand" style={{ width: '25%' }} />
          <Column header="Location" body={locationBodyTemplate} sortable sortField="location" style={{ width: '15%' }} />
          <Column header="Mileage" field="mileage" sortable style={{ width: '12%' }} />
          <Column header="Specs" body={specsBodyTemplate} style={{ width: '15%' }} />
          <Column header="Price/Day" body={priceBodyTemplate} sortable sortField="pricePerDay" style={{ width: '15%' }} />
          <Column header="Actions" body={actionTemplate} style={{ width: '18%', textAlign: 'center' }} />
        </DataTable>
      </Card>

      <Sidebar visible={detailSidebarVisible} position="right" onHide={() => setDetailSidebarVisible(false)} style={{ width: '100%', maxWidth: '450px' }} blockScroll>
        {selectedVehicle && (
          <div style={{ paddingBottom: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img src={selectedVehicle.images?.[0]} alt={`${selectedVehicle.brand} ${selectedVehicle.model}`} style={{ width: '100%', borderRadius: '8px', height: '250px', objectFit: 'cover', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#1f2937' }}>{selectedVehicle.brand} {selectedVehicle.model}</h2>
              <p style={{ color: '#6b7280', margin: 0 }}>{selectedVehicle.year} • {selectedVehicle.seats} seats • {selectedVehicle.mileage}</p>
            </div>

            <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '2px solid #3B82F6' }}>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Daily Rate</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3B82F6' }}>₹{selectedVehicle.pricePerDay.toLocaleString()}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>Per day (24 hours)</div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Specifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Fuel Type</div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.fuelType}</div>
                </div>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Transmission</div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.transmission}</div>
                </div>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Mileage</div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.mileage}</div>
                </div>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Seats</div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.seats} Seater</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
              <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><i className="pi pi-map-marker"></i> Location</div>
              <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.location}</div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Owner</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F9FAFB', padding: '1rem', borderRadius: '6px' }}>
                <Avatar label={selectedVehicle.owner.split(' ').map((n) => n[0]).join('')} size="large" className="bg-primary" style={{ color: 'white' }} />
                <div>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.owner}</div>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Vehicle Owner</div>
                </div>
              </div>
            </div>

            {selectedVehicle.notes && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>Notes</h3>
                <p style={{ background: '#FEFCE8', padding: '1rem', borderRadius: '6px', color: '#78350F', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>{selectedVehicle.notes}</p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button label="Book Now" icon="pi pi-calendar" className="p-button-success" style={{ flex: 1 }} onClick={() => { setBookingForm({ customer_id: '', start_time: '', end_time: '', notes: '' }); setBookingErrors({}); setCreatedBooking(null); setDetailSidebarVisible(false); setBookingSidebarVisible(true); }} />
              <Button label="Close" icon="pi pi-times" className="p-button-secondary" style={{ flex: 1 }} onClick={() => setDetailSidebarVisible(false)} />
            </div>
          </div>
        )}
      </Sidebar>

      <Sidebar visible={bookingSidebarVisible} position="right" onHide={() => setBookingSidebarVisible(false)} style={{ width: '100%', maxWidth: '450px' }} blockScroll>
        {selectedVehicle && (
          <div style={{ paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>{createdBooking ? 'Booking Confirmed!' : 'Book ' + selectedVehicle.brand + ' ' + selectedVehicle.model}</h2>

            {!createdBooking ? (
              <div>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <img src={selectedVehicle.images?.[0]} alt={`${selectedVehicle.brand} ${selectedVehicle.model}`} style={{ width: '80px', height: '80px', borderRadius: '6px', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.brand} {selectedVehicle.model}</div>
                      <div style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: '600' }}>₹{selectedVehicle.pricePerDay.toLocaleString()}/day</div>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{selectedVehicle.year} • {selectedVehicle.seats} seats</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1f2937' }}>Select Customer <span style={{ color: 'red' }}>*</span></label>
                  <Dropdown value={bookingForm.customer_id} options={customers.map(c => ({ label: c.name, value: c.id }))} onChange={(e) => setBookingForm({ ...bookingForm, customer_id: e.value })} placeholder="Choose customer" className={bookingErrors.customer_id ? 'p-invalid' : ''} style={{ width: '100%' }} disabled={bookingLoading} />
                  {bookingErrors.customer_id && <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>{bookingErrors.customer_id}</div>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1f2937' }}>Start Date <span style={{ color: 'red' }}>*</span></label>
                  <InputText type="date" value={bookingForm.start_time} onChange={(e) => setBookingForm({ ...bookingForm, start_time: e.target.value })} className={bookingErrors.start_time ? 'p-invalid' : ''} style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '6px' }} disabled={bookingLoading} />
                  {bookingErrors.start_time && <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>{bookingErrors.start_time}</div>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1f2937' }}>End Date <span style={{ color: 'red' }}>*</span></label>
                  <InputText type="date" value={bookingForm.end_time} onChange={(e) => setBookingForm({ ...bookingForm, end_time: e.target.value })} className={bookingErrors.end_time ? 'p-invalid' : ''} style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '6px' }} disabled={bookingLoading} />
                  {bookingErrors.end_time && <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.3rem' }}>{bookingErrors.end_time}</div>}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" style={{ flex: 1 }} onClick={() => setBookingSidebarVisible(false)} disabled={bookingLoading} />
                  <Button label="Confirm Booking" icon="pi pi-check" className="p-button-success" style={{ flex: 1 }} onClick={createBooking} loading={bookingLoading} />
                </div>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}><i className="pi pi-check-circle text-5xl text-green-500"></i></div>
                <div style={{ background: '#F9FAFB', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.3rem' }}>Booking Number</div>
                    <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.1rem' }}>{createdBooking.booking_number}</div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.3rem' }}>Status</div>
                    <div style={{ display: 'inline-block', background: '#FEF3C7', color: '#92400E', padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600' }}>{createdBooking.booking_status_id}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>Vehicle</h3>
                  <div style={{ background: '#F9FAFB', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem' }}>
                    <div style={{ fontWeight: '600', color: '#1f2937' }}>{createdBooking.vehicle.brand} {createdBooking.vehicle.model}</div>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{createdBooking.vehicle.year} • {createdBooking.vehicle.seats} seats</div>
                  </div>

                  <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>Customer</h3>
                  <div style={{ background: '#F9FAFB', padding: '0.75rem', borderRadius: '6px' }}>
                    <div style={{ fontWeight: '600', color: '#1f2937' }}>{createdBooking.customer?.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{createdBooking.customer?.email}</div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>Rental Dates</h3>
                  <div style={{ background: '#F9FAFB', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>From</div>
                      <div style={{ fontWeight: '600', color: '#1f2937' }}>{new Date(createdBooking.start_time).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>To</div>
                      <div style={{ fontWeight: '600', color: '#1f2937' }}>{new Date(createdBooking.end_time).toLocaleDateString()}</div>
                    </div>
                  </div>

                  <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '6px', border: '2px solid #3B82F6' }}>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem' }}>Total Days: {Math.ceil((new Date(createdBooking.end_time) - new Date(createdBooking.start_time)) / (1000 * 60 * 60 * 24))}</div>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.75rem' }}>Rate: ₹{createdBooking.vehicle.pricePerDay.toLocaleString()}/day</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3B82F6' }}>Total: ₹{(Math.ceil((new Date(createdBooking.end_time) - new Date(createdBooking.start_time)) / (1000 * 60 * 60 * 24)) * createdBooking.vehicle.pricePerDay).toLocaleString()}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Button label="Close" icon="pi pi-times" className="p-button-secondary" style={{ flex: 1 }} onClick={() => { setBookingSidebarVisible(false); fetchAvailableVehicles(); }} />
                  <Button label="View All Bookings" icon="pi pi-calendar" className="p-button-success" style={{ flex: 1 }} onClick={() => { setBookingSidebarVisible(false); window.location.href = '/pages/bookings'; }} />
                </div>
              </div>
            )}
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default AvailableVehicles;
