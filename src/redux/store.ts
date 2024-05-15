import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizza
    },
    devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
