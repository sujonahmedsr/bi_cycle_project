
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cycle-labs-backend.vercel.app/api',
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set("authorization", `${token}`)
            }
            return headers
        }
    }),
    tagTypes: ["task", "product", "user", "authme", "order"],
    endpoints: () => ({})
})