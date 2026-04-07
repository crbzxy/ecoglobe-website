import { httpClient } from './httpClient';

export const sendPanelMasAire = async (payload) => {
  const endpoint = '/PanelMasAire';
  const response = await httpClient.post(endpoint, payload);
  return response.data;
};

