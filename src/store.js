import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState : false,
  reducers : {
    changeName(state){
      return !state;
    }
  }
})

export default configureStore({
  reducer: {
    user: user.reducer
  }
}) 

export let { changeName } = user.actions 
