import { configureStore } from "@reduxjs/toolkit";
import selectedStationReducer from "./slices/selectedStationSlice";
import selectedComponentReducer from "./slices/selectedComponentSlice";

const reducer = {
  selectedStation: selectedStationReducer,
    selectedComponent: selectedComponentReducer,
    selectedComponent: selectedComponentReducer,
  // will add more reducers here
  // format: reducerName: reducerNameReducer (import from slices)
};

const store = configureStore({ reducer });

export default store;
