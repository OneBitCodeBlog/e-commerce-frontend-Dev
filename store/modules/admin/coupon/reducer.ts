import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Coupon from '../../../../dtos/Coupon';

const couponReducer = createSlice({
  name: 'coupon',
  initialState: null,
  reducers: {
    setCouponToEdit(state: Coupon, action: PayloadAction<Coupon>) {
      return state = action.payload;
    },
    clearCouponToEdit(state: Coupon) {
      return state = null;
    }
  }
});

export const { setCouponToEdit, clearCouponToEdit } = couponReducer.actions;
export default couponReducer.reducer;