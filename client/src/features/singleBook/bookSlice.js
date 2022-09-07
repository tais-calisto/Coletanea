import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/customFetch'
import { logoutUser } from '../user/userSlice'

const initialState = {
  isLoading: false,
}

export const addBook = createAsyncThunk(
  'book/addedBook',
  async (book, thunkAPI) => {
    try {
      const response = await customFetch.post(`/books`, book, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Não autorizado.')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    [addBook.pending]: (state) => {
      state.isLoading = true
    },
    [addBook.fulfilled]: (state) => {
      state.isLoading = false
      toast.success('Livro adicionado à estante')
    },
    [addBook.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default bookSlice.reducer
