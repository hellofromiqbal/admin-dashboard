import { combineReducers } from '@reduxjs/toolkit';
import developmentTableReducer from './developmentTableSlice';
import checkTableReducer from './checkTableSlice';
import fourColumnReducer from './fourColumnTableSlice';

const rootReducer = combineReducers({
  developmentTable: developmentTableReducer,
  checkTable: checkTableReducer,
  fourColumnTable: fourColumnReducer,
});

export default rootReducer;
