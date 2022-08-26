import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  booksList: [],
}

export const searchBook = createAsyncThunk(
  'book/searchBook',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch.get(`/books`, {
        params: { search: book.book },
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      return
    }
  }
)

const seachBook = createSlice({
  name: 'seachBook',
  initialState,
  reducers: {},
  extraReducers: {
    [searchBook.pending]: (state) => {
      state.isLoading = true
    },
    [searchBook.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.booksList = [payload]
    },
    [searchBook.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(`${payload}`, {
        position: toast.POSITION.TOP_CENTER,
      })
    },
  },
})

export default seachBook.reducer
