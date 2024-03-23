import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState } from '@/types/slice.ts';

const initialState: AuthInitialState = {
  deviceId: '',
  jwtToken: '',
  jwtTokenExpire: '',
  refreshToken: '',
  pushToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateJwtToken: (state, action) => {
      state.jwtToken = action.payload.jwtToken;
      state.jwtTokenExpire = action.payload.jwtTokenExpire;
    },
  },
});

export const { updateJwtToken } = authSlice.actions;

export default authSlice.reducer;
