import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Dashboard from '../../../../dtos/Dashboard';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {} as Dashboard,
  reducers: {
    updateDates(state: Dashboard, action: PayloadAction<Dashboard>) {
      return state = action.payload;
    }
  }
});

export const { updateDates } = dashboardSlice.actions;
export default dashboardSlice.reducer;