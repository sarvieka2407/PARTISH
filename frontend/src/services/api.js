import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // your backend URL
  withCredentials: true, // important for Google auth cookies
});

export default API;