import * as actionTypes from '../actions/actionTypes';
import copyState from '../../share/deepCopyObj';

const initialState = {
  totalPages: 1,
  link: '',
  currentPage: 1,
};

const paginationInit = (state, action) => {
  const { strWithLinks } = action;
  const newState = copyState(state);
  // получить ссылку и кол-во страниц
  if (strWithLinks) {
    const links = strWithLinks.match(/http[^<>]*/gi);
    const link = links[1];
    const totalPages = Number(link.substring(link.indexOf('?page=') + 6));
    newState.link = link;
    newState.totalPages = totalPages;
  } else {
    newState.totalPages = 1;
    newState.link = '';
  }
  newState.currentPage = 1;
  return newState;
};

const paginationUpdate = (state, action) => {
  const newState = copyState(state);
  newState.currentPage = action.targetPage;
  return newState;
};

const paginationReset = (state) => {
  const newState = copyState(state);
  newState.totalPages = 1;
  newState.link = '';
  newState.targetPage = 1;
  return newState;
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAGINATION_INIT: return paginationInit(state, action);
    case actionTypes.PAGINATION_UPDATE: return paginationUpdate(state, action);
    case actionTypes.PAGINATION_RESET: return paginationReset(state, action);
    default: return state;
  }
};

export default pagination;
