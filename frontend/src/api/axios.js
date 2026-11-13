import axios from "axios";

console.log(" BASE URL =", import.meta.env.VITE_API_URL);

const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true,
    timeout:10000,
})

export default api;