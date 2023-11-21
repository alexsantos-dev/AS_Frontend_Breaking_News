import axios from "axios"

const baseURL = "https://api-mern-social-media.onrender.com"

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`)
    return response
}

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`)
    return response
}