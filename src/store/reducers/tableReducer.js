import * as actionTypes from '../actions/actionTypes';

const initialState = {
  array: [],
};

const copyState = (state) => {
  const newState = JSON.parse(JSON.stringify(state));
  return newState;
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
