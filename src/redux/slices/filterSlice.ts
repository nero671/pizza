import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Sort = {
    name: string,
    sort: 'rating' | '-rating' | 'price' | '-price' | 'title' | '-title';
}

export interface CounterState {
    categoryId: number,
    sort: Sort,
    pageCount: number,
    searchValue: string,
}

const initialState: CounterState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sort: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },

        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },

        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },

        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setPageCount, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
