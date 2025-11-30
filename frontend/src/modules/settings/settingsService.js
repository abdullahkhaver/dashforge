import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/settings',
});

export const settingsService = {
  getSettings: async () => {
    const res = await API.get('/me');
    return res.data;
  },

  updateSettings: async (data) => {
    const res = await API.put('/update', data);
    return res.data;
  },
};
