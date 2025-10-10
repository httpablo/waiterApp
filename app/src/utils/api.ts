import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.193.0.70:3001",
});
