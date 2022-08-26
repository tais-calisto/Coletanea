import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../utils/customFetch'
import { getUserFromLS } from '../utils/localStorage'

const inicialState = {
  isLoading: false,
  readingGoal: '',
  pagesRead: 0,
}
