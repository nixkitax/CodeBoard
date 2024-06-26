import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const saveDocument = async (content) => {
  const response = await api.post('/documents', { content });
  return response.data;
};

export const getDocument = async (id) => {
  const response = await api.get(`/documents/${id}`);
  return response.data;
};
