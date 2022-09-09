import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import bookSlice from '../features/singleBook/bookSlice'
import searchBooksSlice from '../features/searchBooks/searchBooksSlice'
import allBooksSlice from '../features/allBooks/allBooksSlice'
import readedBooksSlice from '../features/allBooks/readedBooksSlice'
import readingBooksSlice from '../features/allBooks/readingBooksSlice'
import toReadBooksSlice from '../features/allBooks/toReadBooksSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    searchBook: searchBooksSlice,
    allBooks: allBooksSlice,
    readedBooks: readedBooksSlice,
    readingBooks: readingBooksSlice,
    toReadBooks: toReadBooksSlice,
  },
})
