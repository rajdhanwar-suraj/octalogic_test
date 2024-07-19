import axios from 'axios';

const API_URL = '/api';

export const fetchVehicleTypes = async () => {
  const response = await axios.get(`${API_URL}/vehicles/vehicle-types`);
  return response.data;
};

export const fetchVehicleModels = async (typeId) => {
  const response = await axios.get(`${API_URL}/vehicles/models/${typeId}`);
  return response.data;
};

export const bookVehicle = async (bookingData) => {
  const response = await axios.post(`${API_URL}/booking/book`, bookingData);
  return response.data;
};
