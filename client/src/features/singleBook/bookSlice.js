import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
  reducers: {},
})

export default bookSlice.reducer
