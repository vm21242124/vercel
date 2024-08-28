import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; // Adjust the path based on where you saved the slice

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;