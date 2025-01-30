import { Tproduct } from "@/components/Shop/RightSide";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TinitialState = {
    carts: Tproduct[],
    selectedItems: number,
    totalPrice: number
}

const initialState: TinitialState = {
    carts: [],
    selectedItems: 0,
    totalPrice: 0
}

const productSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCard: (state, action) => {
            const isExiting = state.carts.find(cart => cart._id === action.payload._id)
            if (!isExiting) {
                state.carts.push({ ...action.payload, quantity: 1 })
                toast.success("Add to cart")
            } else {
                toast.success("Alrady Add This")
            }
            state.selectedItems = setSelectedItems(state)
            state.totalPrice = setTotalPrice(state)
        },
        updateCart: (state, action) => {
            state.carts.map(cart => {
                if (cart?._id === action.payload.id) {
                    if (action.payload.type === 'increment') {
                        cart.quantity += 1
                    } else if (action.payload.type === 'decrement') {
                        if (cart.quantity > 1) {
                            cart.quantity -= 1
                        }
                    }
                }
                return cart
            })
            state.selectedItems = setSelectedItems(state)
            state.totalPrice = setTotalPrice(state)
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(cart => cart._id !== action.payload)
            toast("Remove Cart")
        },
    }
})


export const setSelectedItems = (state: TinitialState) =>
    state.carts.reduce((total: number, cart: Tproduct) => {
        return Number(total + cart.quantity)
    }, 0)

export const setTotalPrice = (state: TinitialState) =>
    state.carts.reduce((total: number, cart: Tproduct) => {
        return Number(total + cart.quantity * cart.price)
    }, 0)

export const { addCard, updateCart,
    removeCart
 } = productSlice.actions;
export default productSlice.reducer;