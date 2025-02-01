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
        singleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: `/product/create`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["product"]
        }),
        updateProduct: builder.mutation({
            query: ({ id, data }) => (
                console.log(id, data, "redux"),
                
                {
                url: `/product/${id}`,
                method: "PATCH",
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
        }),
    })
})

export const {
    useAllProductsQuery,
    useSingleProductQuery,
    useProductDeleteMutation,
    useUpdateProductMutation,
    useAddProductMutation
} = productApi