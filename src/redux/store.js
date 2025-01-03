import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';

const store = configureStore({
    reducer: {
        doctors: doctorsReducer
    }
});

export default store;