import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => ({value: action.payload.value}),
    clearName: (state, action) => ({value: initialState.value})
  },
})

// Action creators are generated for each case reducer function
export const { setName, clearName } = nameSlice.actions

export default nameSlice.reducer