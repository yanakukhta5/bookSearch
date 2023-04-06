import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { books } from '@/services'

import {
  Item,
  sortBy,
  filterParams,
  bookFilterOption,
  bookSortOption
} from '@/types'

import { RootState } from '.'

const bookFilterOptions = [
  { name: 'all', text: 'все' },
  { name: 'art', text: 'искусство' },
  { name: 'biography', text: 'биография' },
  { name: 'computers', text: 'программирование' },
  { name: 'history', text: 'история' },
  { name: 'medical', text: 'медицина' },
  { name: 'poetry', text: 'поэзия' }
]

const bookSortOptions = [
  { name: 'newest', text: 'дате выхода' },
  { name: 'relevance', text: 'популярности' }
]

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async function (data, thunkAPI) {
    const state = thunkAPI.getState()
    try {
      const booksState = (state as RootState).books
      return await books.getBooks(
        booksState.query,
        booksState.startIndex,
        booksState.sortBy,
        booksState.filterParams
      )
    } catch (error) {
      thunkAPI.rejectWithValue({
        message: 'Произошла ошибка при запросе книг',
        error
      })
    }
  }
)

interface InitialState {
  query: string
  booksArr: Item[]
  status: null | 'success' | 'error' | 'loading'
  error?: 'error'
  startIndex: number
  totalItems?: number
  sortBy: sortBy
  filterParams: filterParams
  bookFilterOptions: bookFilterOption[]
  bookSortOptions: bookSortOption[]
  shownAllBooks: boolean
}

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    query: '',
    startIndex: 0,
    booksArr: [],
    status: null,
    error: undefined,
    totalItems: 0,
    sortBy: 'relevance',
    filterParams: ['all'],
    bookFilterOptions,
    bookSortOptions,
    shownAllBooks: false
  } as InitialState,
  reducers: {
    changeFilterParams: (state, action) => {
      const payload = action.payload

      if (payload === 'all') {
        state.filterParams = state.filterParams.filter(
          (filter) => filter === payload
        )
      } else {
        state.filterParams = state.filterParams.filter(
          (filter) => filter !== 'all'
        )
      }

      if (!state.filterParams.includes(payload))
        state.filterParams = [...state.filterParams, payload]
      else if (state.filterParams.length === 1) return
      else
        state.filterParams = state.filterParams.filter(
          (filter) => filter !== payload
        )
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    changeQuery: (state, action) => {
      state.query = action.payload
    },
    resetBooksArr: (state) => {
      state.booksArr = []
    },
    resetStartIndex: (state) => {
      state.startIndex = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'success'
      if (action?.payload?.items) {
        state.booksArr = [...state.booksArr, ...action.payload.items]
        state.startIndex += 30
        state.totalItems = action?.payload?.totalItems
      } else state.shownAllBooks = true
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = 'error'
      state.error = 'error'
    })
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading'
    })
  }
})

export const {
  changeQuery,
  resetBooksArr,
  changeSortBy,
  changeFilterParams,
  resetStartIndex
} = bookSlice.actions

export default bookSlice.reducer
