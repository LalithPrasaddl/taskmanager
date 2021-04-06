import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    nickname: '',
    people: []
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
      state.nickname = 'John Doe'
    },
    updateUserInfo: (state, action) => {
      state.nickname = action.payload.nickname
      state.people = action.payload.people
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserId, updateUserInfo } = userSlice.actions

export default userSlice.reducer
