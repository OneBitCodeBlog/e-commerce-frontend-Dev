import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null },
    reducers: {
        setLoggedUser(state, action) {
            console.log(state)
            console.log(action)
            state.user = action.payload; 
        },
        clearLoggedUser(state, action) {
            state.user = null;
        }
    }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;