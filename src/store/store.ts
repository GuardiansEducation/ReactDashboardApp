import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slices/counterSlice";

export const store = configureStore({
  reducer: counterSliceReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
