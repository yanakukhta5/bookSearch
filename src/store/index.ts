import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export const store = configureStore({
 reducer: {
  
 },
 middleware: [thunk]
})