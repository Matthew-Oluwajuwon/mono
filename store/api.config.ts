import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, baseQuery } from "./baseQueryWithReauth";


export const apiConfig = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth(baseQuery),
  tagTypes: ["getData", "Transactions"],
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  endpoints: (builder) => ({
   
  }),
});
