import axios from 'axios';

const API_URL = 'https://apigp.onrender.com/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};