import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getAllCribs = async () => {
  try {
    const response = await api.get('/cribs');
    return response.data;
  } catch (error) {
    console.error('Error fetching cribs:', error);
  }
};

export const addCrib = async (newCrib) => {
  try {
    const response = await api.post('/cribs', newCrib);
    return response.data;
  } catch (error) {
    console.error('Error adding crib:', error);
  }
};

export const updateCrib = async (id, updatedCrib) => {
  try {
    const response = await api.put(`/cribs/${id}`, updatedCrib);
    return response.data;
  } catch (error) {
    console.error('Error updating crib:', error);
  }
};

export const deleteCrib = async (id) => {
  try {
    const response = await api.delete(`/cribs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting crib:', error);
  }
};

export const getCrib = async (id) => {
  try {
    const response = await api.get(`/cribs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crib:', error);
  }
};
