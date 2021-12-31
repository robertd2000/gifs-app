import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGifs } from "../api/api";
import { gifInfoType, gifsType } from "../type";


const initialState: gifsType = {
    gifsList: [],
    error: false,
    loading: false,
    search: 'dog',
    offset: 0,
    total: 0
}

export const getGifsList = createAsyncThunk(
    'gifs/getGifsList',
    async ({search, offset}: {search: string, offset: number}) => {
        const response = await getGifs(search, offset)
        return response
    }
)

const gifsReducer = createSlice({
    name: 'gifsReducer',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getGifsList.pending, (state, action) => {
            state.loading = true
            state.gifsList = []
        })
        .addCase(getGifsList.fulfilled, (state, action) => {
            console.log(action.payload);
            state.gifsList = action.payload.data
            state.total = action.payload.pagination.total_count
            state.loading = false
        })
    }
})

export const {setSearch} = gifsReducer.actions
export default gifsReducer.reducer