import axios from 'axios';

import type { Product } from '@/types';

export const createProduct = async (product: Product) =>
  axios
    .post(`${process.env.API_URL}:${process.env.API_PORT}/products`, product)
    .then((res) => res.data);
