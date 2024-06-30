"use client";
import { useState } from "react";
import api from "../../api";
import "./RegisterForm.css";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // function handleLogout() {
    //     localStorage.removeItem("access");
    //     localStorage.removeItem("refresh");
    //     window.location.reload();
    // }

    function handleRegister(e) {
        e.preventDefault();
        api.post("/auth/user/register/", formData)
            .then((response) => {
                const { data } = response;
                console.log("Server response:", data);
            })
            .catch((error) => {
                const { response } = error;
                console.log("Error:", response);
            });
    }

    return (
        <main className="RegisterContainer">
            <section className="RegisterPage">
                <header>
                    <h1>Register</h1>
                </header>
                <div className="RegisterContent">
                    <form className="RegisterForm" onSubmit={handleRegister}>
                        <div>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Full name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
