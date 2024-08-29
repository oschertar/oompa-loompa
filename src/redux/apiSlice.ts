import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../types/api";

export const apiSlice = createApi({
  reducerPath: "api",
  keepUnusedDataFor: 86400,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus",
  }),
  endpoints: (builder) => ({
    getOompaLoompas: builder.query<ApiResponse, number>({
      query: (page) => `/oompa-loompas?page=${page}`,
    }),
  }),
});

export const { useGetOompaLoompasQuery } = apiSlice;
