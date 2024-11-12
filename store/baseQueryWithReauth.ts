import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

type BaseQueryType = ReturnType<typeof fetchBaseQuery>;

export const baseQueryWithReauth: (baseQuery: BaseQueryType) => BaseQueryType =
  (baseQuery) => async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    return result;
  };

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
  prepareHeaders: (headers) => {
    try {
      // const apiKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
      // const token = SecureStore.getItem("token");
      // if (token) {
      //   headers.set("Authorization", `Bearer ${token}`);
      // }
      // headers.set("ApiKey", apiKey as string);
      return headers;
    } catch (error) {
      // Handle error retrieving token
      console.error("Error retrieving token:", error);
      Alert.alert("Something went wrong, please try again");
      return headers;
    }
  },
});
