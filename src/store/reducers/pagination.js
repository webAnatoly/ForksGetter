import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  amountPages: 1,
  baseLink: '',
  targetPage: 1,
};

const initPagination = (state, action) => {
  const { strWithLinks } = action;
  const newState = copyState(state);
  // надо получить ссылку и кол-во страниц
  if (strWithLinks) {
    const links = strWithLinks.match(/<(.*?)>/gi);
    const baseLink = links[1];
    newState.baseLink = baseLink;
  }
  // newState.amountPages = amountPages;
  return newState;
};

const updatePagination = (state, action) => {
  const { targetPage } = action.data;
  const newState = copyState(state);
  newState.currentPage = targetPage;
  return newState;
};

const resetPagination = (state) => {
  const newState = copyState(state);
  newState.amountPages = 1;
  newState.baseLink = '';
  newState.targetPage = 1;
  return newState;
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAGINATION_INIT: return initPagination(state, action);
    case actionTypes.PAGINATION_UPDATE: return updatePagination(state, action);
    case actionTypes.PAGINATION_RESET: return resetPagination(state, action);
    default: return state;
  }
};

export default tableReducer;
