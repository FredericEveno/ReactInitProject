import { configureStore, } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counterMiddlewareOne from '../features/counter/counterMiddlewareOne'
import counterMiddlewareTwo from '../features/counter/counterMiddlewareTwo'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [
    counterMiddlewareOne,
    counterMiddlewareTwo,
  ]
})
