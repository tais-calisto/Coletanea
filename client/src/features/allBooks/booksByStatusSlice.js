import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
  isLoading: false,
  books: [],
}

export const getBooksByStatus = createAsyncThunk(
  'booksbystatus/get',
  async (status, thunkAPI) => {
    try {
      const response = await customFetch('/books/status', {
        params: { status: status },
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

const booksByStatusSlice = createSlice({
  name: 'all books',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooksByStatus.pending]: (state) => {
      state.isLoading = true
    },
    [getBooksByStatus.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.books = books
    },
    [getBooksByStatus.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default booksByStatusSlice.reducer
