import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { subscriptionSliceReducer } from "./slices/subscriptionSlice";

export const store = configureStore({
  reducer: {
    subscription: subscriptionSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
