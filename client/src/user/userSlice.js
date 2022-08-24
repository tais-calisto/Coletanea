import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { getUserfromLS, addUserToLS } from '../utils/localStorage'

const initialState = {
  isLoading: false,
  user: getUserfromLS(),
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/register', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = { user }
      addUserToLS(user)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error('Usuário já cadastrado', {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = { user }
      addUserToLS(user)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(`${payload}`, {
        position: toast.POSITION.TOP_CENTER,
      })
    },
  },
})

export default userSlice.reducer
