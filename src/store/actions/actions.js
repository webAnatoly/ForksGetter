import * as actionTypes from './actionTypes';
import axiosInstance from '../../axios-base-url';

/* Action Creators */
export const fillTable = data => ({
  type: actionTypes.FILL_TABLE,
  array: data, // ожидаю получить массив
});

export const error404 = () => ({ type: actionTypes.ERR_404 });
export const error404gone = () => ({ type: actionTypes.ERR_404_GONE });

export const notValidInput = () => ({ type: actionTypes.NOT_VALID_INPUT });
export const validInput = () => ({ type: actionTypes.VALID_INPUT });

export const loadStart = () => ({ type: actionTypes.LOAD_START });
export const loadSuccess = () => ({ type: actionTypes.LOAD_SUCCESS });
export const loadFails = () => ({ type: actionTypes.LOAD_FAILS });

export const initPagination = strWithLinks => ({
  type: actionTypes.PAGINATION_INIT,
  strWithLinks,
});
export const paginationUpdate = () => ({ type: actionTypes.PAGINATION_UPDATE });
export const paginationReset = () => ({ type: actionTypes.PAGINATION_RESET });

/* Этот Action Creator возвращает не объект, а функцию.
Это возможно благодаря подключенному middleware redux-thunk.
В данном случае возвращать нужно функцию (а не объект) для того, чтобы
иметь возможность отложить выполнения экшена и изменение стейта, до получение ответа от сервера.
В качестве middleware использую redux-thunk */
export const submitInput = path => (
  (dispatch) => {
    axiosInstance.get(path) // строка запроса на основе пользовательского ввода
      .then((response) => {
        console.log('resp: ', response.headers.link);
        dispatch(loadSuccess());
        dispatch(error404gone());
        dispatch(initPagination(response.headers.link));
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
