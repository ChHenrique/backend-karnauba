import axios from "axios";

export const BaseURL = 'http://localhost:3000';

export const api = axios.create({
    baseURL: BaseURL,
    withCredentials: true,
})