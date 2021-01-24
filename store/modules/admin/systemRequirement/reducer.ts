import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SystemRequirement from '../../../../dtos/SystemRequirement';

const systemRequirementSlice = createSlice({
  name: 'systemRequirement',
  initialState: null,
  reducers: {
    setSystemRequirementToEdit(state: SystemRequirement, action: PayloadAction<SystemRequirement>) {
      return state = action.payload;
    },
    clearSystemRequirementToEdit(state: SystemRequirement) {
      return state = null;
    }
  }
});

export const { setSystemRequirementToEdit, clearSystemRequirementToEdit } = systemRequirementSlice.actions;
export default systemRequirementSlice.reducer;