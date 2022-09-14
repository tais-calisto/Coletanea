import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  goals: [],
  booksByGoal: [],
}

export const createGoal = createAsyncThunk(
  'create/goal',
  async (goal, thunkAPI) => {
    try {
      const response = await customFetch.post(`/goals`, goal, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.goal
    } catch (error) {
      console.log(error)
    }
  }
)

export const getGoals = createAsyncThunk('get/goal', async (goal, thunkAPI) => {
  try {
    const response = await customFetch.get(`/goals`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const getBooksByGoals = createAsyncThunk(
  'getbooks/goal',
  async (time, thunkAPI) => {
    try {
      const response = await customFetch.get(`/goals/books`, {
        params: { startDate: time.startDate, period: time.period },
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

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: {
    [createGoal.pending]: (state) => {
      state.isLoading = true
    },
    [createGoal.fulfilled]: (state) => {
      state.isLoading = false
      toast.success('Meta adicionada!')
    },
    [createGoal.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [getGoals.pending]: (state) => {
      state.isLoading = true
    },
    [getGoals.fulfilled]: (state, { payload }) => {
      const { goals } = payload
      state.isLoading = false
      state.goals = goals
    },
    [getGoals.rejected]: (state) => {
      state.isLoading = false
    },
    [getBooksByGoals.pending]: (state) => {
      state.isLoading = true
    },
    [getBooksByGoals.fulfilled]: (state, { payload }) => {
      const { books } = payload
      state.isLoading = false
      state.booksByGoal = books
    },
    [getBooksByGoals.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default goalsSlice.reducer
