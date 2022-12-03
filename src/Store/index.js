import { configureStore } from '@reduxjs/toolkit'
import todosReducers from './slices/todosSlices'

export const store = configureStore({
  reducer: {
    todos : todosReducers
  },
})
