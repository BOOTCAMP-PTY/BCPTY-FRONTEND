import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.isAuthenticated = !state.isAuthenticated
    },
  },
})

export const { changeStatus } = userSlice.actions
export default userSlice.reducer
