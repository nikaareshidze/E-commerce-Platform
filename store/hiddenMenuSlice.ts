import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface hiddenMenuSlice {
  menuisShown: boolean;
}

const initialState: hiddenMenuSlice = {
  menuisShown: false,
};

export const hiddenMenuSlice = createSlice({
  name: "hiddenMenu",
  initialState,
  reducers: {
    setMenuIsShown: (state, action: PayloadAction<boolean>) => {
      state.menuisShown = action.payload;
    },
  },
});

export const { setMenuIsShown } = hiddenMenuSlice.actions;

export default hiddenMenuSlice.reducer;
