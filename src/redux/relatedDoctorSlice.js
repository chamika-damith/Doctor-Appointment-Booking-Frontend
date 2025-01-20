import { createSlice } from '@reduxjs/toolkit';

const initialState=[];

const relatedDoctorSlice = createSlice({
    name: 'relatedDoctors',
    initialState,
    reducers: {
        addRelatedDoctors:(state,action)=>{
            state.push(action.payload);
        },
    }
});

export const{addRelatedDoctors} = relatedDoctorSlice.actions;
export default relatedDoctorSlice.reducer;