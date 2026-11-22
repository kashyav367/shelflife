import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./userSlice.js";

const appStore = configureStore({
    reducer: {
        user: appReducer,
    },
});

export default appStore;