import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8081";

export const api = {
  signup: (data) => axios.post(`${API_BASE_URL}/signup`, data),
  login: (data) => axios.post(`${API_BASE_URL}/login`, data),
  getProfile: (token) => axios.get(`${API_BASE_URL}/profile`, { headers: { Authorization: `Bearer ${token}` } }),
  updateProfile: (data, token) => axios.put(`${API_BASE_URL}/profile`, data, { headers: { Authorization: `Bearer ${token}` } }),
  getPosts: () => axios.get(`${API_BASE_URL}/posts`),
  createPost: (data, token) => axios.post(`${API_BASE_URL}/post`, data, { headers: { Authorization: `Bearer ${token}` } }),
};
