/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi"; // Ensure correct import




export const store = configureStore({
  reducer: {
    
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;