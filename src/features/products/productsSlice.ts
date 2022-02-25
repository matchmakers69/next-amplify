import { createSlice } from '@reduxjs/toolkit';
import { IClothesCategory, IProduct } from 'src/interfaces';
import { filteredProductsByCategory } from './service/clothesByGenderCategory';
import { getProducts } from './actions';

export type ProductsState = {
  products: IProduct[] | null;
  loading: boolean;
  isError: boolean;
  clothesByGenderCategory: IClothesCategory[] | null;
};

export const initialState: ProductsState = {
  loading: false,
  isError: false,
  products: [],
  clothesByGenderCategory: [],
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
        const clothesByGender = filteredProductsByCategory(payload);

        state.clothesByGenderCategory = clothesByGender;
        state.products = payload;
        state.loading = false;
        state.isError = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      }),
});

export default productsSlice.reducer;
