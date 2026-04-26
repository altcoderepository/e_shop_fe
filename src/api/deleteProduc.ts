import axios from 'axios';

export const deleteProduct = async (id: string) =>
  axios
    .delete(`${process.env.API_URL}:${process.env.API_PORT}/products/${id}`)
    .then((res) => res.data);
