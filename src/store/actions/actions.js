import * as actionTypes from './actionTypes';
import axiosInstance from '../../axios-base-url';

/* Action Creators */
export const fillTable = data => ({
  type: actionTypes.FILL_TABLE,
  array: data, // ожидаю получить массив
});
export const clearTable = () => ({ type: actionTypes.CLEAR_TABLE });

export const error404 = () => ({ type: actionTypes.ERR_404 });
export const error404gone = () => ({ type: actionTypes.ERR_404_GONE });

export const notValidInput = () => ({ type: actionTypes.NOT_VALID_INPUT });
export const validInput = () => ({ type: actionTypes.VALID_INPUT });

export const loadStart = () => ({ type: actionTypes.LOAD_START });
export const loadSuccess = () => ({ type: actionTypes.LOAD_SUCCESS });
export const loadFails = () => ({ type: actionTypes.LOAD_FAILS });

export const initTargetRepoName = targetRepoName => ({
  type: actionTypes.INIT_TARGET_REPO_NAME,
  targetRepoName,
  data: 'test data',
});
export const clearTargetRepoName = () => ({ type: actionTypes.CLEAR_TARGET_REPO_NAME });

export const initPagination = strWithLinks => ({
  type: actionTypes.PAGINATION_INIT,
  strWithLinks,
});
export const paginationUpdate = targetPage => ({
  type: actionTypes.PAGINATION_UPDATE,
  targetPage,
});
export const paginationReset = () => ({ type: actionTypes.PAGINATION_RESET });

/* Этот Action Creator возвращает не объект, а функцию.
Это возможно благодаря подключенному middleware redux-thunk.
В данном случае возвращать нужно функцию (а не объект) для того, чтобы
иметь возможность отложить выполнения экшена и изменение стейта, до получение ответа от сервера.
В качестве middleware использую redux-thunk */
export const submitInput = (path, targetRepoName) => (
  (dispatch) => {
    axiosInstance.get(path) // строка запроса на основе пользовательского ввода
      .then((response) => {
        dispatch(loadSuccess());
        dispatch(error404gone());
        dispatch(initPagination(response.headers.link));
        dispatch(initTargetRepoName(targetRepoName));
        dispatch(fillTable(response.data)); // пока что заполняю страницу первой порцией данных
      })
      .catch((err) => {
        dispatch(loadFails());
        dispatch(paginationReset());
        if (err.response !== undefined && (err.response.status === 404 || err.message.search('404') !== -1)) {
          dispatch(error404());
        } else {
          console.log(err);
        }
      });
  }
);

export const clickHandlerPaginationButton = (path, targetPage) => (
  (dispatch) => {
    axiosInstance.get(path)
      .then((response) => {
        dispatch(loadSuccess());
        dispatch(error404gone());
        dispatch(paginationUpdate(targetPage));
        dispatch(fillTable(response.data));
      })
      .catch((err) => {
        dispatch(loadFails());
        dispatch(paginationReset());
        if (err.response !== undefined && (err.response.status === 404 || err.message.search('404') !== -1)) {
          dispatch(error404());
        } else {
          dispatch(clearTable());
          dispatch(clearTargetRepoName());
          console.log(err);
        }
      });
  }
);
