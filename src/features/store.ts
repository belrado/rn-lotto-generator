import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/features/slice/auth";
import commonReducer from "@/features/slice/common";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
