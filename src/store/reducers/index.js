import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import remoteIterations from './remoteIterations';
import main from './main';
import pagination from './pagination';

const rootReducer = combineReducers({
  table: tableReducer,
  remoteIterations,
  main,
  pagination,
});

export default rootReducer;
