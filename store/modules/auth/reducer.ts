import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../dtos/User';
import ApiData from '../../../dtos/ApiData';

type State = {
    loggedUser: User;
    apiData: ApiData;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedUser: null, apiData: null } as State,
    reducers: {
        setLoggedUser(state, action: PayloadAction<User>) {
            state.loggedUser = action.payload; 
        },
        clearLoggedUser(state) {
            state.loggedUser = null;
        },
        setApiData(state, action: PayloadAction<ApiData>) {
            state.apiData = action.payload; 
        },
        clearApiData(state) {
            state.apiData = null;
        }
    }
})

export const { setLoggedUser, clearLoggedUser, setApiData, clearApiData } = authSlice.actions;
export default authSlice.reducer;