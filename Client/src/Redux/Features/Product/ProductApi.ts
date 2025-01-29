import { baseApi } from "@/Redux/Api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allProducts: builder.query({
            query: () => ({
                url: `/product`,
                method: "GET",
            }),
            providesTags: ["product"]
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/product/create`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["product"]
        }),
        productDelete: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"]
        })
    })
})

export const {
    useAllProductsQuery,
    useProductDeleteMutation,
    useAddProductMutation
} = productApi