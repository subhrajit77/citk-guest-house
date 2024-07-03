export const registerOptions = {
    fullname: {
        required: "Full name is required",
        minLength: {
            value: 3,
            message: "Full name must be at least 3 characters long",
        },
    },
    username: {
        required: "Username is required",
        minLength: {
            value: 3,
            message: "Username must be at least 3 characters long",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /\S+@\S+\.\S+/,
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
    confirm_password: {
        // required: "Confirm password is required",
        validate: (value) => {
            return value === formData.password || "Passwords do not match";
        },
    },
};
