import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  error404: false,
};

const occured404 = (state) => {
  const newState = copyState(state);
  newState.error404 = true;
  return newState;
};

const cansel404 = (state) => {
  const newState = copyState(state);
  newState.error404 = false;
  return newState;
};

const remoteIterations = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERR_404: return occured404(state, action);
    case actionTypes.ERR_404_GONE: return cansel404(state, action);
    default: return state;
  }
};

export default remoteIterations;
