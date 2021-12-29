import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGifs } from "../api/api";
import { gifInfoType, gifsType } from "../type";


const initialState: gifsType = {
    gifsList: [],
    error: false,
    loading: false,
    search: '',
    offset: 0
}

export const getGifsList = createAsyncThunk(
    'gifs/getGifsList',
    async (search: string) => {
        const response = await getGifs(search)
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
            state.loading = false
        })
    }
})

export default gifsReducer.reducer