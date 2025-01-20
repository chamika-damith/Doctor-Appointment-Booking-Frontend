import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import relatedDoctorSlice from './relatedDoctorSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    relatedDoctors:relatedDoctorSlice
  },
});

export default store;
