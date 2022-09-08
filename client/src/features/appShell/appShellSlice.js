import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showShearch: false,
}

const appShell = createSlice({
  name: 'app Shell',
  initialState,
  reducers: {
    showSearch: (state) => {
      state.showShearch = true
    },
    showShelf: (state) => {
      state.showShearch = false
    },
  },
})

export const { showSearch, showShelf } = appShell.actions
export default appShell.reducer
