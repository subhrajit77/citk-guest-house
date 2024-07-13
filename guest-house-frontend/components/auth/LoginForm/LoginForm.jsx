"use client";
import "./LoginForm.css";
import api from "../../../api";
import { useForm } from "react-hook-form";
import saveJWT from "../../../utils/cookies";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const registerOptions = {
        username: {
            required: "Username is required",
            minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
            },
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
            },
        },
    };

    // remove all error checks
    for (let key in registerOptions) {
        registerOptions[key] = {};
    }

    function handleLogin(formData) {
        console.log("Form data:", formData);
        api.get("/auth/user/login/", formData)
            .then((response) => {
                const { data } = response;
                saveJWT("access", data.access);
                saveJWT("refresh", data.refresh);
                console.log("JWT saved");
            })
            .catch((error) => {
                console.log("Server Error: ", error);
            });
    }
    const styles = {
        color: "red",
        fontSize: "14px",
        textAlign: "right",
    };

    return (
        <>
            <main className="contactContainer">
                <section className="contactUsPage">
                    <h1>Login </h1>
                    <div className="contactContent">
                        <form
                            className="contactForm"
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <div>
                                <input
                                    {...register(
                                        "username",
                                        registerOptions.username
                                    )}
                                    // type="email"
                                    placeholder="Username"
                                />
                                {errors?.username && (
                                    <div style={styles}>
                                        {errors?.username.message}
                                    </div>
                                )}
                            </div>
                            <div>
                                <input
                                    {...register(
                                        "password",
                                        registerOptions.password
                                    )}
                                    type="password"
                                    placeholder="Password"
                                />
                                {errors.password && (
                                    <div style={styles}>
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            <button type="submit">Log in</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
