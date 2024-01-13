import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    categoryId: number,
    sort: any,
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
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },

        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },

        setSort(state, action) {
            state.sort = action.payload;
        },

        setPageCount(state, action) {
            state.pageCount = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setPageCount, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
