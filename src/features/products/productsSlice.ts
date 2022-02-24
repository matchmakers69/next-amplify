import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'src/interfaces';
import { getProducts } from './actions';

export type ProductsState = {
  products: IProduct[];
  loading: boolean;
  isError: boolean;
};

export const initialState: ProductsState = {
  loading: false,
  isError: false,
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        const { products } = payload;
        // state.products = products;
        state.loading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      }),
});

export default productsSlice.reducer;
