import { createSlice } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('accessToken') || null;
const initialUser = JSON.parse(localStorage.getItem('user')) || null;

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
        accessToken: initialToken,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setAccessToken(state, action) {
            state.accessToken = action.payload;
    
            localStorage.setItem('accessToken', action.payload);
        },
        clearUserData(state) {
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
        },
    },
});

export const { setUser, setAccessToken, clearUserData } = userSlice.actions;
export default userSlice.reducer;
