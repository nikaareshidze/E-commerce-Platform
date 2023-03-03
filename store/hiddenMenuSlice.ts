import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface hiddenMenuSlice {
  smartphonesIsShown: boolean;
  laptopsIsShown: boolean;
}

const initialState: hiddenMenuSlice = {
  smartphonesIsShown: false,
  laptopsIsShown: false,
};

export const hiddenMenuSlice = createSlice({
  name: "hiddenMenu",
  initialState,
  reducers: {
    setSmartphonesIsShown: (state, action: PayloadAction<boolean>) => {
      state.smartphonesIsShown = action.payload;
    },
    setLaptopsIsShown: (state, action: PayloadAction<boolean>) => {
      state.laptopsIsShown = action.payload;
    },
  },
});

export const { setSmartphonesIsShown, setLaptopsIsShown } =
  hiddenMenuSlice.actions;

export default hiddenMenuSlice.reducer;
