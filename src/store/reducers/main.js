import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  isInputValid: true,
  loading: false,
  targetRepoName: '',
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

const initTargetRepoName = (state, action) => {
  const newState = copyState(state);
  const { targetRepoName } = action;
  newState.targetRepoName = targetRepoName;
  return newState;
};

const clearTargetRepoName = (state) => {
  const newState = copyState(state);
  newState.targetRepoName = '';
  return newState;
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALID_INPUT: return inputValid(state);
    case actionTypes.NOT_VALID_INPUT: return inputNotValid(state);
    case actionTypes.LOAD_START: return loadStart(state);
    case actionTypes.LOAD_SUCCESS: return loadSuccess(state);
    case actionTypes.LOAD_FAILS: return loadFails(state);
    case actionTypes.INIT_TARGET_REPO_NAME: return initTargetRepoName(state, action);
    case actionTypes.CLEAR_TARGET_REPO_NAME: return clearTargetRepoName(state);
    default: return state;
  }
};

export default main;
