import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { books } from '@/services'

import { Item } from '@/types'

import { RootState } from '.'

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async function (data, thunkAPI) {
    const state = thunkAPI.getState()
    try {
      const booksState = (state as RootState).books
      return await books.getBooks(booksState.query, booksState.startIndex)
    } catch(error) {
      thunkAPI.rejectWithValue({ message: 'Произошла ошибка при запросе книг', error })
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
}

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    query: '',
    startIndex: 0,
    booksArr: [],
    status: null,
    error: undefined,
    totalItems: 0
  } as InitialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload
    },
    resetBooksArr: (state) => {
      state.booksArr = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'success'
      state.booksArr = [...state.booksArr, ...(action?.payload?.items || [])]
      state.startIndex += 30
      state.totalItems = action?.payload?.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = 'error'
      state.error = 'error'
    })
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = 'loading'
    })
  }
})

export const { changeQuery, resetBooksArr } = bookSlice.actions

export default bookSlice.reducer
