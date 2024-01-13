import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export interface CounterState {
    items: Array<any>,
    status: 'loading' | 'success' | 'error'
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus', async (params) => {
        const {
            // @ts-ignore
            category,
            // @ts-ignore
            sort
        } = params;
        const { data } = await axios.get(`https://6538d707a543859d1bb20638.mockapi.io/pizza?${category > 0 ? `category=${category}` : ''
        }&sortBy=${sort.sort.replace('-', '')}&order=${sort.sort.includes('-') ? 'asc' : 'desc'}`)

        return data
    }
);

const initialState: CounterState = {
    items: [],
    status: 'loading',
}

// @ts-ignore

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    // @ts-ignore
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        });

        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        });

    },
})


// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
