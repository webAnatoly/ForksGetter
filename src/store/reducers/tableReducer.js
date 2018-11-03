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

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_TABLE: return fillTable(state, action);
    default: return state;
  }
};

export default tableReducer;
