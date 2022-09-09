import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'

const initialState = {
  isLoading: false,
  readedBooks: [],
}

export const getAllReadedBooks = createAsyncThunk(
  'readedbooks/get',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch('/books/readed-books', {
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

const readedBooks = createSlice({
  name: 'readed books',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllReadedBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getAllReadedBooks.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.readedBooks = books
    },
    [getAllReadedBooks.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default readedBooks.reducer
