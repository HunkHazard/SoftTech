import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const selectedStationSlice = createSlice({
    name: 'selectedStation',
    initialState,
    reducers: {
        changeSelectedStation: (state, action) => { 
            state.value = action.payload;
        }
    }
});


export const { changeSelectedStation } = selectedStationSlice.actions;

export default selectedStationSlice.reducer;

