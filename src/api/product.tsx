import { notFound } from '@tanstack/react-router';
import axios from 'axios';

export type ProductType = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
};

export const fetchProduct = async (productId: string): Promise<ProductType> => {
  console.info(`Fetching product with id ${productId}...`);
  await new Promise((resolve) => setTimeout(resolve, 500));

  return axios
    .get<ProductType>(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response?.status === 404) {
        throw notFound();
      }
      throw error;
    });
};

export const fetchProducts = async (): Promise<ProductType[]> => {
  console.info('Fetching products...');
  await new Promise((resolve) => setTimeout(resolve, 500));

  return axios
    .get<ProductType[]>('https://fakestoreapi.com/products')
    .then((response) => response.data.slice(0, 10));
};
