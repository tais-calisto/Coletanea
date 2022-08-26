import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/customFetch'
import { getUserFromLS } from '../../utils/localStorage'

const inicialState = {
  isLoading: false,
  readingStatus: ['Lido', 'Lendo', 'Pretendo Ler', 'Releitura'],
  authors: [],
  title: '',
  cover: '',
  description: '',
  bookPages: 0,
  isEditing: false,
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
})

export default bookSlice.reducer
