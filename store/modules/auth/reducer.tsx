import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null },
    reducers: {
        setLoggedUser(state, action) {
            console.log(state)
            console.log(state)
            state.user = action.payload; 
        },
        clearLoggedUserUser(state, action) {
            state.user = null;
        }
    }
})

export const { setLoggedUser, clearLoggedUserUser } = authSlice.actions;
export default authSlice.reducer;