import { combineReducers } from '@reduxjs/toolkit';
import developmentTableReducer from './developmentTableSlice';

const rootReducer = combineReducers({
  developmentTable: developmentTableReducer
});

export default rootReducer;
