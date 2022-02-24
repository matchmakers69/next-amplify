import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from 'src/services/APIs/products';

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const products = await fetchProducts();
      return products;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
