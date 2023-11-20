import axios from "axios"

const baseURL = "https://api-mern-social-media.onrender.com"

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`)
    return response
}