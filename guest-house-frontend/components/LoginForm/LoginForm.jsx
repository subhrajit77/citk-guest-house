// pages/contact-us.jsx
"use client";
import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
  }

  return (
    <>
      <div className="contactContainer">
        <div className="contactUsPage">
          <h1>Django Rest Framework </h1>
          <div className="contactContent">
            <form onSubmit={handleSubmit} className="contactForm">
              <div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
