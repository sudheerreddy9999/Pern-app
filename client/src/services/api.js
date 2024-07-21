import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    console.log(response,"Response")
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
