import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, baseQuery } from "./baseQueryWithReauth";
import { endpoints } from "./endpoints";

interface Request {
  email: string;
  password: string;
}

export const apiConfig = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth(baseQuery),
  tagTypes: ["getData", "Transactions"],
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  endpoints: (builder) => ({
    login: builder.mutation<any, Request>({
      query: (request) => ({
        url: endpoints.auth.login,
        method: "POST",
        body: request,
        headers: {
          ApiKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        },
      }),
    }),
    signUp: builder.mutation<any, Request>({
      query: (request) => ({
        url: endpoints.auth.signUp,
        method: "POST",
        body: request,
        headers: {
          ApiKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = apiConfig;
