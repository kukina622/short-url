import axios from "axios";

const baseURL = process.env.baseURL || "http://localhost:8080"

const _axios = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 1000
});

export default _axios;
