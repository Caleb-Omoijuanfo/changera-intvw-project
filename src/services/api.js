import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_PROXY_URL,
  }),
  endpoints: (builder) => ({
    getProfile: builder.mutation({
      query: (body) => ({
        url: "/authenticate",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetProfileMutation } = profileApi;
