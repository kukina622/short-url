import axios from "./_axios";

export function apiPostUrl(url: string) {
  return axios.post("/api/url", { url });
}
