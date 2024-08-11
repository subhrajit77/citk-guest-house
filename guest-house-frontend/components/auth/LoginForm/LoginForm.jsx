"use client";
import "./LoginForm.css";
import api from "../../../api";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
export default function LoginForm() {
    const toast = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const registerOptions = {
        email: {
            required: "Email is required",
            pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
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
        api.post("/accounts/user/create/", formData)
            .then((response) => {
                const { data } = response;
                console.log("User Logged in");
                toast({
                    title: "Success",
                    description: "Logged in successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            })
            .catch((error) => {
                const { response } = error;
                if (!response) {
                    console.log("Network Error");
                    return;
                }
                else {
                    const { status,data } = response;
                    toast({
                        title: "Error",
                        description: data.detail,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                    console.log("Server Error: ", data);
                }
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
                                type="email"
                                    {...register(
                                        "email",
                                        registerOptions.email
                                    )}
                                    placeholder="Username"
                                />
                                {errors?.email && (
                                    <div style={styles}>
                                        {errors?.email.message}
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
