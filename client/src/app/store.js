import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import bookSlice from '../features/singleBook/bookSlice'
import searchBooksSlice from '../features/searchBooks/searchBooksSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    searchBook: searchBooksSlice,
  },
})
