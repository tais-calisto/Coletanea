import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
  isLoading: false,
  allBooks: [],
}

export const getAllBooks = createAsyncThunk(
  'allbooks/get',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch('/books/all-books', {
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

const allBooksSlice = createSlice({
  name: 'all books',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getAllBooks.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.allBooks = books
    },
    [getAllBooks.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default allBooksSlice.reducer
