import { baseApi } from "@/Redux/Api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allProducts: builder.query({
            query: () => ({
                url: `/product`,
                method: "GET",
            })
        }),
    })
})

export const {
    useAllProductsQuery
} = productApi