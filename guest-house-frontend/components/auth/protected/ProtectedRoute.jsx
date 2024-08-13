"use client";
import api from "../../../api";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Spinner } from "@chakra-ui/react";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    });

    const refreshToken = async () => {
        const refresh = Cookies.get("refresh");

        if (!refresh) {
            setIsAuthorized(false);
            return;
        }
        try {
            const res = await api.post("/accounts/user/refresh-token/", {
                refresh: refresh,
            });
            if (res.status === 200) {
                setIsAuthorized(true);
            } else {
                console.log("Error refreshing token");
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = Cookies.get("access");
        console.log("access token", token);
        console.log("cookie", Cookies.get());

        if (!token) {
            const refresh = Cookies.get("refresh");
            if (refresh) {
                await refreshToken();
                return;
            } else {
                setIsAuthorized(false);
                return;
            }
        }
        setIsAuthorized(true);
    };

    if (isAuthorized === null) {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        );
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <div>user not logged in</div>;

    // return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
