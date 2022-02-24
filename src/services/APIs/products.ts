import axios from 'axios';
import { IProducts } from 'src/interfaces';

export const fetchProducts = async (): Promise<IProducts> => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
};
