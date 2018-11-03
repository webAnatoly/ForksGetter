import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  isInputValid: true,
  loading: false,
};

const inputValid = (state) => {
  const newState = copyState(state);
  newState.isInputValid = true;
  return newState;
};

const inputNotValid = (state) => {
  const newState = copyState(state);
  newState.isInputValid = false;
  return newState;
};

const loadStart = (state) => {
  const newState = copyState(state);
  newState.loading = true;
  return newState;
};

const loadSuccess = (state) => {
  const newState = copyState(state);
  newState.loading = false;
  return newState;
};

const loadFails = (state) => {
  const newState = copyState(state);
  newState.loading = false;
  return newState;
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALID_INPUT: return inputValid(state);
    case actionTypes.NOT_VALID_INPUT: return inputNotValid(state);
    case actionTypes.LOAD_START: return loadStart(state);
    case actionTypes.LOAD_SUCCESS: return loadSuccess(state);
    case actionTypes.LOAD_FAILS: return loadFails(state);
    default: return state;
  }
};

export default main;
