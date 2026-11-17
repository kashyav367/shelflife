import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

const appStore = configureStore({
    reducer: {
        user: appReducer,
    },
});

export default appStore;