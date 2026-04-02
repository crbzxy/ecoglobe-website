import { httpClient } from './httpClient';

export const sendQuote = async (payload) => {
  const response = await httpClient.post('/cotizacion', payload);
  return response.data;
};

