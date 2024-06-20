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


axios.defaults.withCredentials = true;

export default api;