"use client";

import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Message } from "primereact/message";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Sample bookings data
const initialBookings = [
  { id: 1, user: "John Doe", car: "Honda City", date: "2025-10-04", status: "Pending" },
  { id: 2, user: "Jane Smith", car: "Toyota Innova", date: "2025-10-03", status: "Confirmed" },
  { id: 3, user: "Mike Johnson", car: "Hyundai i20", date: "2025-10-02", status: "Completed" },
];

const statusOptions = ["Pending", "Confirmed", "Completed", "Cancelled"];
const carsList = ["Honda City", "Toyota Innova", "Hyundai i20", "Suzuki Swift"];

export default function BookingsPage() {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Status badge
  const statusBadge = (status) => {
    const colors = { Confirmed: "green", Pending: "orange", Completed: "blue", Cancelled: "red" };
    return (
      <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: colors[status] }}>
        {status}
      </span>
    );
  };

  // Open sidebar for view/edit
  const viewBooking = (booking) => {
    setSelectedBooking({ ...booking });
    setFormErrors({});
    setVisibleSidebar(true);
  };

  // Save booking changes (status update only for simplicity)
  const saveBooking = () => {
    if (!selectedBooking.status) {
      setFormErrors({ status: "Status is required" });
      return;
    }

    setBookings(
      bookings.map((b) => (b.id === selectedBooking.id ? selectedBooking : b))
    );
    setVisibleSidebar(false);
  };

  // Action buttons for each row
  const actionTemplate = (rowData) => (
    <div className="p-d-flex p-ai-center p-gap-2">
      {rowData.status === "Pending" && (
        <Button
          label="Confirm"
          icon="pi pi-check"
          className="p-button-success p-button-sm"
          onClick={() =>
            setBookings(
              bookings.map((b) =>
                b.id === rowData.id ? { ...b, status: "Confirmed" } : b
              )
            )
          }
        />
      )}
      {rowData.status !== "Cancelled" && (
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-danger p-button-sm"
          onClick={() =>
            setBookings(
              bookings.map((b) =>
                b.id === rowData.id ? { ...b, status: "Cancelled" } : b
              )
            )
          }
        />
      )}
      <Button
        label="View"
        icon="pi pi-eye"
        className="p-button-secondary p-button-sm"
        onClick={() => viewBooking(rowData)}
      />
    </div>
  );

  return (
    <div className="p-d-flex p-flex-column" style={{ minHeight: "100vh", background: "#f4f6fa", padding: "1rem" }}>
      <h2 style={{ fontWeight: "bold", textAlign: "center", fontSize: "2rem", marginBottom: "1.5rem", color:"black" }}>
        Manage Bookings
      </h2>

      {/* Bookings Table */}
      <DataTable
        value={bookings}
        paginator
        rows={5}
        responsiveLayout="scroll"
        rowHover
        className="p-datatable-gridlines"
      >
        <Column field="id" header="ID" style={{ width: "60px" }} />
        <Column field="user" header="User" />
        <Column field="car" header="Car" />
        <Column field="date" header="Date" />
        <Column field="status" header="Status" body={(row) => statusBadge(row.status)} />
        <Column body={actionTemplate} header="Actions" style={{ width: "300px" }} />
      </DataTable>

      {/* Sidebar for viewing/editing booking */}
      <Sidebar
        visible={visibleSidebar}
        position="right"
        onHide={() => setVisibleSidebar(false)}
        style={{ width: "90%", maxWidth: "30rem" }}
      >
        {selectedBooking && (
          <div className="p-fluid p-formgrid p-grid">
            <h3>Booking #{selectedBooking.id}</h3>
            <div className="p-field p-col-12">
              <label>User</label>
              <InputText value={selectedBooking.user} disabled />
            </div>
            <div className="p-field p-col-12">
              <label>Car</label>
              <Dropdown
                value={selectedBooking.car}
                options={carsList}
                onChange={(e) =>
                  setSelectedBooking({ ...selectedBooking, car: e.value })
                }
              />
            </div>
            <div className="p-field p-col-12">
              <label>Date</label>
              <Calendar
                value={new Date(selectedBooking.date)}
                onChange={(e) =>
                  setSelectedBooking({ ...selectedBooking, date: e.value.toISOString().split("T")[0] })
                }
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="p-field p-col-12">
              <label>Status</label>
              <Dropdown
                value={selectedBooking.status}
                options={statusOptions}
                onChange={(e) =>
                  setSelectedBooking({ ...selectedBooking, status: e.value })
                }
                className={formErrors.status ? "p-invalid" : ""}
              />
              {formErrors.status && <Message severity="error" text={formErrors.status} />}
            </div>
            <div className="p-col-12" style={{ marginTop: "1rem" }}>
              <Button
                label="Save Changes"
                icon="pi pi-check"
                className="p-button-success"
                onClick={saveBooking}
              />
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
}
