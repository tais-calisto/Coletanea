import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
  isLoading: false,
  toReadBooks: [],
}

export const getAllToReadBooks = createAsyncThunk(
  'toreadbooks/get',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch('/books/to-read-books', {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const toReadBooks = createSlice({
  name: 'to read books',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllToReadBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getAllToReadBooks.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.toReadBooks = books
    },
    [getAllToReadBooks.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default toReadBooks.reducer
