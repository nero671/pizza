import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {getCartItmesFromLocalStorage} from "../../utils/getCartItmesFromLocalStorage";
import {calcTotalPrice} from "../../utils/calcTotlPrice";

export type CartItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    size: string,
    type: number,
    count: number,
}

export interface СartSliceState {
    totalPrice: number,
    currentType: number,
    currentSize: number,
    items: CartItem[],
}

const { items, totalPrice } = getCartItmesFromLocalStorage();

const initialState: СartSliceState = {
    totalPrice: totalPrice,
    currentType: 0,
    currentSize: 0,
    items: items
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = calcTotalPrice(state.items)
        },

        addType(state, action: PayloadAction<number>) {
            state.currentType = action.payload;
        },

        addSize(state, action: PayloadAction<number>) {
            state.currentSize = action.payload;
        },

        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload);

            if (findItem) {
                findItem.count--;
            }
        },

        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },

        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
})

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id);


// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItem, minusItem, addType, addSize } = cartSlice.actions

export default cartSlice.reducer
