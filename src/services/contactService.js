import { httpClient } from './httpClient';

export const sendContact = async (payload) => {
  const response = await httpClient.post('/contact', payload);
  return response.data;
};

