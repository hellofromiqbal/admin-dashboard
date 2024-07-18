import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DevelopmentData {
  name: string;
  tech: string[];
  date: string;
  progress: number;
}

interface DevelopmentTableState {
  data: DevelopmentData[];
}

const initialState: DevelopmentTableState = {
  data: [
    { name: 'Alpha', tech: ["ios", "android", "windows"], date: '2023-05-01', progress: 75.3 },
    { name: 'Beta', tech: ["ios"], date: '2023-06-15', progress: 50.4 },
    { name: 'Gamma', tech: ["ios", "windows"], date: '2023-07-20', progress: 90.7 },
    { name: 'Delta', tech: ["ios", "android", "windows"], date: '2023-08-10', progress: 65.8 },
    { name: 'Epsilon', tech: ["ios", "windows"], date: '2023-09-05', progress: 85.6 },
    { name: 'Zeta', tech: ["ios", "android", "windows"], date: '2023-10-12', progress: 40.3 }
  ]
};

const developmentTableSlice = createSlice({
  name: 'developmentTable',
  initialState,
  reducers: {
    addNewDevelopmentTableData(state, action: PayloadAction<DevelopmentData>) {
      state.data.unshift(action.payload);
    },
    removeDevelopmentTableData(state, action: PayloadAction<number>) {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addNewDevelopmentTableData, removeDevelopmentTableData } = developmentTableSlice.actions;

export default developmentTableSlice.reducer;
