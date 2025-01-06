import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorsSlice';
import { relatedDoctorReducer } from './relatedDoctorReducer';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    relatedDoctors: relatedDoctorReducer
  },
});

export default store;
