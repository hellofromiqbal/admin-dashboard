import { combineReducers } from '@reduxjs/toolkit';
import developmentTableReducer from './developmentTableSlice';
import checkTableReducer from './checkTableSlice';

const rootReducer = combineReducers({
  developmentTable: developmentTableReducer,
  checkTable: checkTableReducer
});

export default rootReducer;
