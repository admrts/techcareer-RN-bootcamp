import baseAxios from 'axios';

export const axios = baseAxios.create({
  baseURL: 'http://localhost:3000',
});
