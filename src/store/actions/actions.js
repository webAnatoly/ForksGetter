import * as actionTypes from './actionTypes';
import axiosInstance from '../../axios-base-url';

/* Action Creators */
export const test = () => ({ type: actionTypes.TEST });
export const fillTable = data => ({
  type: actionTypes.FILL_TABLE,
  array: data, // ожидаю получить массив
});

/* Этот Action Creator возвращает не объект, а функцию.
Это возможно благодаря подключенному middleware redux-thunk.
В данном случае возвращать нужно функцию (а не объект) для того, чтобы
иметь возможность отложить выполнения экшена и изменение стейта, до получение ответа от сервера.
В качестве middleware использую redux-thunk */
export const submitInput = () => (
  (dispatch) => {
    axiosInstance.get('repos/iliakan/javascript-tutorial-ru/forks') // строка запроса на основе пользовательского ввода
      .then((response) => {
        dispatch(fillTable(response.data));
      })
      .catch((err) => {
        console.log('error: ', err);
        dispatchfillTableFailed();
      });
  }
);
