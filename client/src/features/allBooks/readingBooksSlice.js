import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
  isLoading: false,
  readingBooks: [],
}

export const getAllReadingBooks = createAsyncThunk(
  'readingbooks/get',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch('/books/reading-books', {
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

const readingBooks = createSlice({
  name: 'reading books',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllReadingBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getAllReadingBooks.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.readingBooks = books
    },
    [getAllReadingBooks.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default readingBooks.reducer
