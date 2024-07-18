import { combineReducers } from '@reduxjs/toolkit';
import developmentTableReducer from './developmentTableSlice';
import checkTableReducer from './checkTableSlice';
import fourColumnTableReducer from './fourColumnTableSlice';
import complexTableReducer from './complexTableSlice';

const rootReducer = combineReducers({
  developmentTable: developmentTableReducer,
  checkTable: checkTableReducer,
  fourColumnTable: fourColumnTableReducer,
  complexTable: complexTableReducer
});

export default rootReducer;
