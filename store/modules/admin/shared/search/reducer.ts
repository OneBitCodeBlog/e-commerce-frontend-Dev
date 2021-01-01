import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch(state: string, action: PayloadAction<string>) {
      return state = action.payload;
    },
    clearSearch(state: string) {
      return state = '';
    }
  }
})

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;