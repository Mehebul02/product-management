/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./api/baseApi"; // Ensure correct import




export const store = configureStor({
  reducer: {
    
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;