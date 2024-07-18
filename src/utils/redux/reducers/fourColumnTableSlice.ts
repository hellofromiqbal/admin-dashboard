import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FourColumnData {
  name: string;
  progress: number;
  quantity: number;
  date: string;
}

interface FourColumnTableState {
  data: FourColumnData[];
}

const initialState: FourColumnTableState = {
  data: [
    { name: 'Alpha', progress: 75.3, quantity: 120, date: '2023-05-01' },
    { name: 'Beta', progress: 50.4, quantity: 80, date: '2023-06-15' },
    { name: 'Gamma', progress: 90.7, quantity: 150, date: '2023-07-20' },
    { name: 'Delta', progress: 65.8, quantity: 200, date: '2023-08-10' },
    { name: 'Epsilon', progress: 85.6, quantity: 170, date: '2023-09-05' },
    { name: 'Zeta', progress: 40.3, quantity: 60, date: '2023-10-12' }
  ]
};

const fourColumnTableSlice = createSlice({
  name: 'fourColumnTable',
  initialState,
  reducers: {
    addNewFourColumnTableData(state, action: PayloadAction<FourColumnData>) {
      const newData = action.payload;
      if (newData.progress < 0 || newData.progress > 100) {
        throw new Error('Progress must be between 0 and 100');
      }
      if (newData.quantity < 0) {
        throw new Error('Quantity must be a positive number');
      }
      state.data.unshift(newData);
    },
    removeFourColumnTableData(state, action: PayloadAction<number>) {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { 
  addNewFourColumnTableData,
  removeFourColumnTableData
} = fourColumnTableSlice.actions;

export default fourColumnTableSlice.reducer;
