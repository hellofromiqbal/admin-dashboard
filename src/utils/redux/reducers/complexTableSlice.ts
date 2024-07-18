import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ComplexData {
  name: string;
  status: string;
  date: string;
  progress: number;
};

interface ComplexTableState {
  data: ComplexData[];
};

const initialState: ComplexTableState = {
  data: [
    { name: 'Alpha', status: 'approved', date: '2023-05-01', progress: 75.3 },
    { name: 'Beta', status: 'disabled', date: '2023-06-15', progress: 50.4 },
    { name: 'Gamma', status: 'error', date: '2023-07-20', progress: 90.7 },
    { name: 'Delta', status: 'approved', date: '2023-08-10', progress: 65.8 },
    { name: 'Epsilon', status: 'disabled', date: '2023-09-05', progress: 85.6 },
    { name: 'Zeta', status: 'error', date: '2023-10-12', progress: 40.3 }
  ]
};

const complexTableSlice = createSlice({
  name: 'complexTable',
  initialState,
  reducers: {
    addNewComplexTableData(state, action: PayloadAction<ComplexData>) {
      state.data.unshift(action.payload);
    },
    removeComplexTableData(state, action: PayloadAction<number>) {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addNewComplexTableData, removeComplexTableData } = complexTableSlice.actions;

export default complexTableSlice.reducer;
