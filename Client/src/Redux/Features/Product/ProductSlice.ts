import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
    carts: [],
    selectedItems: 0,
    totalPrice: 0
}

const productSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addCard: (state, action) => {
            const isExiting = state.carts.find(cart => cart.id === action.payload.id)
            if (!isExiting) {
                state.carts.push({ ...action.payload, quantity: 1 })
                toast.success("Add to cart")
            } else {
                console.log('Alrady Add This');
                toast.success("Alrady Add This")
            }
        },
        updateCart: (state, action) => {
            state.carts.map(cart => {
                if (cart?.id === action.payload.id) {
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
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(cart => cart.id !== action.payload)
            toast("Remove Cart")
        },
    }
})

export const { addCard, updateCart, removeCart } = productSlice.actions;
export default productSlice.reducer;