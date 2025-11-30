import axios from 'axios';

// Base API for auth
const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const authService = {
  login: async (username, password) => {
    const res = await API.post('/login', { username, password });
    return res.data;
  },

  register: async (name, username, password) => {
    const res = await API.post('/register', { name, username, password });
    return res.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => localStorage.getItem('token'),

  setToken: (token) => localStorage.setItem('token', token),
};
