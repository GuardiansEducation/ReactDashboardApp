import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slices/counterSlice";
import { subscriptionSliceReducer } from "./slices/subscriptionSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
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
