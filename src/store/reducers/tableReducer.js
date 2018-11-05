import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  array: [],
};

const fillTable = (state, action) => {
  const newState = copyState(state);
  newState.array = action.array;
  return newState;
};

const clearTable = (state) => {
  const newState = copyState(state);
  newState.array = [];
  return newState;
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_TABLE: return fillTable(state, action);
    case actionTypes.CLEAR_TABLE: return clearTable(state);
    default: return state;
  }
};

export default tableReducer;
