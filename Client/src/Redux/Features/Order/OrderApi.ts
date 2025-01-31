import { baseApi } from "@/Redux/Api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // allProducts: builder.query({
        //     query: () => ({
        //         url: `/product`,
        //         method: "GET",
        //     }),
        //     providesTags: ["product"]
        // }),
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
    useCreateOrderMutation
} = orderApi