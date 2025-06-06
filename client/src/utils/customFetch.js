import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
