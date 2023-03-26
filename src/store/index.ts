import { configureStore } from '@reduxjs/toolkit'

import booksReducer from './booksSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
})

export {
  fetchBooks,
  changeQuery,
  resetBooksArr,
  changeSortBy,
  changeFilterParams,
  resetStartIndex
} from './booksSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
