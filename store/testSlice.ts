import { createSlice } from "@reduxjs/toolkit";

export interface testSlice {
  x: string;
}

const initialState: testSlice = {
  x: "koko",
};

export const testSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {},
});

export const {} = testSlice.actions;

export default testSlice.reducer;
