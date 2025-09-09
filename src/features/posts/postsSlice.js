import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!res.ok) throw new Error('Ошибка загрузки постов')
        return await res.json()
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.data = action.error.message
            })
    }
})

export default postsSlice.reducer