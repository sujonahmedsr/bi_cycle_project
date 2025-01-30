import { baseApi } from "@/Redux/Api/baseApi"

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allUsers: builder.query({
            query: () => ({
                url: `/admin/users`,
                method: "GET",
            }),
            providesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: (id) => ({
                url: `/admin/users/${id}/block`,
                method: "PATCH",
            }),
            invalidatesTags: ["user"]
        }),
    })
})

export const {
    useAllUsersQuery,
    useUpdateUserMutation
} = userApi