import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AreaList, AreaStore } from "@types";

const initialState: AreaStore = {
  list: {
    count: 0,
    areas: [],
  },
};

const areasSlice = createSlice({
  name: "areas",
  initialState,
  reducers: {
    assign: (state, action: PayloadAction<{ list: AreaList }>) => {
      state.list = action.payload.list;
    },
  },
});

export const { assign } = areasSlice.actions;
export const counterSliceReducer = areasSlice.reducer;
