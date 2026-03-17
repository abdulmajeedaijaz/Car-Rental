"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // import useRouter

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // initialize router

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (replace with real authentication logic)
    if (email === "admin@gmail.com" && password === "admin123") {
      setError("");
      alert("Login successful!");
      router.push("/pages/dashboard"); // navigate to dashboard page
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#51555cff"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          minWidth: "320px",
          color: "#000000ff",
          fontWeight: "bold",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "2rem"}}>Admin Login</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginTop: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc"
            }}
            required
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
