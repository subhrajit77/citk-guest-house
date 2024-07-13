import axios from 'axios';
import Cookies from 'js-cookie';

const url = "http://localhost:8000"
// for django port 8000 (can be customized, according to where the backend is running)

// create an axios instance
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api;