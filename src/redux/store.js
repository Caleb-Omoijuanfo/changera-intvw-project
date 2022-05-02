import { configureStore } from "@reduxjs/toolkit";

import { profileApi } from "../services/api";

export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});
