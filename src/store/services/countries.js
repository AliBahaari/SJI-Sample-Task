import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "v2/all",
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
