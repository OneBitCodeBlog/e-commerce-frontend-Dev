import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../../dtos/User';

const userReducer = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUserToEdit(state: User, action: PayloadAction<User>) {
      return state = action.payload;
    },
    clearUserToEdit(state: User) {
      return state = null;
    }
  }
});

export const { setUserToEdit, clearUserToEdit } = userReducer.actions;
export default userReducer.reducer;