import {CommonInitialState} from "@/types/slice.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CommonInitialState = {
  loading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const {
  setLoading,
} = commonSlice.actions;

export default commonSlice.reducer;
