import axios from "axios";

const _axios = axios.create({
  baseURL: process.env.baseURL || "http://localhost:8080",
  timeout: 1000
});

export default _axios
