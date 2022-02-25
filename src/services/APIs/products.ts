import axios from 'axios';
import { IProduct } from 'src/interfaces';

export const fetchProducts = async () => {
  const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
  return res.data;
};
