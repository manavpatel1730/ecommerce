import { configureStore } from '@reduxjs/toolkit'
import AddtocartSlice from '../slices/AddtocartSlice'

export const store = configureStore({
  reducer: {
    addtocart:AddtocartSlice
  },
})