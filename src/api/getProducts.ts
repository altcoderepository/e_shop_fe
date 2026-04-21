import axios from 'axios';

export const getProducts = async () =>
  axios
    .get(`${process.env.API_URL}:${process.env.API_PORT}/products`)
    .then((res) => res.data);
