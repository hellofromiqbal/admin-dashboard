import { combineReducers } from '@reduxjs/toolkit';
import developmentTableReducer from './developmentTableSlice';
import checkTableReducer from './checkTableSlice';
import fourColumnTableReducer from './fourColumnTableSlice';
import complexTableReducer from './complexTableSlice';
import modalVisibilityReducer from './modalVisibility';

const rootReducer = combineReducers({
  developmentTable: developmentTableReducer,
  checkTable: checkTableReducer,
  fourColumnTable: fourColumnTableReducer,
  complexTable: complexTableReducer,
  modalVisibility: modalVisibilityReducer
});

export default rootReducer;
