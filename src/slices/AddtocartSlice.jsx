import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cart:[]
}

export const AddtocartSlice = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    addtocart:(state,action)=>{
      console.log(action.payload)
      state.cart.push(action.payload)
      console.log(state.cart)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addtocart } = AddtocartSlice.actions

export default AddtocartSlice.reducer