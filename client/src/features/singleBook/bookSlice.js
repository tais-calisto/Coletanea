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

export const updateBook = createAsyncThunk(
  'uptade/book',
  async (update, thunkAPI) => {
    console.log(update)
    try {
      const response = await customFetch.patch(
        `/books/${update.book}`,
        { status: update.status },
        {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        }
      )
      return response.data
    } catch (error) {}
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
    [updateBook.pending]: (state) => {
      state.isLoading = true
    },
    [updateBook.fulfilled]: (state) => {
      state.isLoading = false
      toast.success('Atualizado com sucesso')
    },
    [updateBook.rejected]: (state) => {
      state.isLoading = false
      toast.error('Algo deu errado')
    },
  },
})

export default bookSlice.reducer
