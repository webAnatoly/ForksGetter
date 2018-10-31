import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userName: 'user name', //  имя владельца репозитария     owner.login
  stars: 234, //              кол - во звёзд репозитария    stargazers_count
  repoName: 'repo name', //   полное название репозитария   full_name
  repoUrl: 'repo url', //     ссылка на репозиторий форка   html_url
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST: return test(state, action);
    case actionTypes.FILL_TABLE: return fillTable(state, action);
    default: return state;
  }
};

export default reducer;
