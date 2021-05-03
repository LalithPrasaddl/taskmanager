import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickname: 'John Doe',
    people: []
  },
  reducers: {
    updateUserInfo: (state, action) => {
      state.nickname = action.payload.nickname
      state.people = action.payload.people
    }
  },
})

export const { updateUserInfo } = userSlice.actions

export default userSlice.reducer
