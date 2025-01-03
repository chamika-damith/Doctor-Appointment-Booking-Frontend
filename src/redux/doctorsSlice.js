import { createSlice } from '@reduxjs/toolkit';
import { doctors } from '../assets/assets';

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: doctors,
    reducers: {}
});

export default doctorsSlice.reducer;