import { createSlice } from '@reduxjs/toolkit';

export const modalVisibilitySlice = createSlice({
  name: 'modalVisibility',
  initialState: {
    visibility: false,
    type: '',
  },
  reducers: {
    setModalVisibility(state, action) {
      state.visibility = action.payload.visibility;
      state.type = action.payload.type;
    }
  },
});

export const { setModalVisibility } = modalVisibilitySlice.actions;

export default modalVisibilitySlice.reducer;
