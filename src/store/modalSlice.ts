import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'user',
  initialState: {
    showModal: false,
    modalScreen: null
  },
  reducers: {
    setModal: (state, action) => {
      state.showModal = action.payload.showModal
      state.modalScreen = action.payload.modalScreen
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = modalSlice.actions

export default modalSlice.reducer
