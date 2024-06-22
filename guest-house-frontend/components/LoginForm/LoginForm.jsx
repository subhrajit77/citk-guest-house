// pages/contact-us.jsx
"use client";
import { useState } from "react";
import "./LoginForm.css";
import api from "../../api";
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
        // For example, send the form data to the server
        api.post("/auth/token/", formData).then((response) => {
            data = response.data;
            console.log("Server response:", response);
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
        });
        console.log("Form data:", formData);
    }

    function handleRegister(e) {
        e.preventDefault();
        api.post("/auth/user/register/", formData)
            .then((response) => {
                const { data } = response;
                console.log("Server response:", data);
            })
            .catch((error) => {
                const {response} = error;
                console.log("Error:", response);
            });
    }

    return (
        <>
            <div className="contactContainer">
                <div className="contactUsPage">
                    <h1>Login </h1>
                    <div className="contactContent">
                        <form className="contactForm">
                            <div>
                                <input
                                    type="email"
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
                            <button type="button" onClick={handleSubmit}>
                                Log in
                            </button>
                            <button type="button" onClick={handleRegister}>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
