import axios from 'axios';

const fileApiBaseUrl =
  import.meta.env.VITE_FILE_API_BASE_URL || 'http://localhost:4000';

export const uploadFile = async (formData) => {
  const response = await axios.post(`${fileApiBaseUrl}/upload`, formData);
  return response.data;
};

