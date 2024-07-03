"use client";
import { useForm } from "react-hook-form";
import api from "../../../api";
import "./RegisterForm.css";
import { registerOptions } from "./registerChecks";
export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    // for (let key in formData) {
    //     formData[key] = {};
    // }

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        // window.location.reload();
    };

    function handleRegister(formData) {
        handleLogout();
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

    const styles = {
        color: "red",
        fontSize: "14px",
        textAlign: "right",
    };

    return (
        <main className="RegisterContainer">
            <section className="RegisterPage">
                <header>
                    <h1>Register</h1>
                </header>
                <div className="RegisterContent">
                    <form
                        className="RegisterForm"
                        onSubmit={handleSubmit(handleRegister)}
                    >
                        <div>
                            <input
                                type="text"
                                // id="fullname"
                                {...register("fullname", {
                                    required: "Full name is required",
                                })}
                                placeholder="Full name"
                            />
                            {errors.fullname && (
                                <span style={styles}>
                                    {errors.fullname.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                // id="username"
                                {...register(
                                    "username",
                                    registerOptions.username
                                )}
                                placeholder="Username"
                            />
                            {errors.username && (
                                <span style={styles}>
                                    {errors.username.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                {...register("email", registerOptions.email)}
                                placeholder="Email"
                            />
                            {errors.email && (
                                <span style={styles}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                {...register(
                                    "password",
                                    registerOptions.password
                                )}
                                placeholder="Password"
                            />
                            {errors.password && (
                                <span style={styles}>
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirm_password"
                                {...register(
                                    "confirm_password",
                                    registerOptions.confirm_password
                                )}
                                placeholder="Confirm Password"
                            />
                            {errors.confirm_password && (
                                <span style={styles}>
                                    {errors.confirm_password.message}
                                </span>
                            )}
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
