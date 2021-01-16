import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from '../../../../dtos/Product';

const productSlice = createSlice({
  name: 'product',
  initialState: null,
  reducers: {
    setProductToEdit(state: Product, action: PayloadAction<Product>) {
      return state = action.payload;
    },
    clearProductToEdit(state: Product) {
      return state = null;
    }
  }
});

export const { setProductToEdit, clearProductToEdit } = productSlice.actions;
export default productSlice.reducer;