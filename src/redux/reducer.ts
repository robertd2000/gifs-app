import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGifs } from "../api/api";
import { gifInfoType, gifsType } from "../type";


const initialState: gifsType = {
    gifsList: [],
    error: false,
    loading: false,
    search: '',
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

export const updateGifsList = createAsyncThunk(
    'gifs/updateGifsList',
    async ({search, offset}: {search: string, offset: number}) => {
        const response = await getGifs(search, offset)
        return response
    }
)

const gifsReducer = createSlice({
    name: 'gifsReducer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getGifsList.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getGifsList.fulfilled, (state, action) => {
            console.log(action.payload);
            state.gifsList = action.payload.data
            state.total = action.payload.pagination.total_count
            state.loading = false
        })
        .addCase(updateGifsList.pending, (state, action) => {
            state.loading = true
        })
        .addCase(updateGifsList.fulfilled, (state, action) => {
            state.gifsList = [...state.gifsList, ...action.payload.data]
            state.total = action.payload.pagination.total_count
            state.loading = false
        })
    }
})

export default gifsReducer.reducer