import axios from 'axios';

const url = "http://localhost:8000"
// for django port 8000 (can be customized, according to where the backend is running)

// create an axios instance
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.defaults.withCredentials = true;

export default api;