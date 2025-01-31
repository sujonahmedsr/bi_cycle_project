import { baseApi } from "@/Redux/Api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userAllOrders: builder.query({
            query: () => ({
                url: `/order/userAllOrders`,
                method: "GET",
            }),
            providesTags: ["order"]
        }),
        adminAllOrders: builder.query({
            query: () => ({
                url: `/order/adminAllOrders`,
                method: "GET",
            }),
            providesTags: ["order"]
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: `/order/create-order`,
                method: "POST",
                body: data
            }),
        }),
    })
})

export const {
    useCreateOrderMutation,
    useUserAllOrdersQuery,
    useAdminAllOrdersQuery
} = orderApi