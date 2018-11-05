import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';

import css from './Pagination.css';

const getPartOfPath = link => link.substring(link.indexOf('repositories'), link.indexOf('?page='));

const Pagination = (props) => {
  const {
    show, totalPages, link, currentPage, clickHandler,
  } = props;
  let pagination;
  let partOfPath;
  const continuum = 7;
  const slots = 9;
  const em = {
    fontStyle: 'bold',
    transform: 'scale(1.2)',
  };

  if (link !== '') { partOfPath = getPartOfPath(link); }

  // если одна страница то пагинацию не показывать
  if (!show || totalPages === 1) { pagination = null; }

  // кол-во страниц меньше либо равно кол-ву слотов пагинации
  if (totalPages > 1 && totalPages <= slots) {
    pagination = (
      <div className={css.Pagination}>
        {
          Array(totalPages).fill('').map((n, index) => (
            <button
              key={Math.random()}
              className={css.button}
              type="button"
              style={index === currentPage - 1 ? em : {}}
              onClick={() => clickHandler(`${partOfPath}?page=${index + 1}`, index + 1)}
            >
              {index + 1}
            </button>
          ))
        }
      </div>
    );
  }
  /* если кол-во страниц больше чем кол-во слотов */

  // текущая страница в начале списка пагинации
  if (totalPages > slots && currentPage <= continuum) {
    pagination = (
      <div className={css.Pagination}>
        {
          Array(slots).fill('').map((btn, index) => {
            let content = index + 1;
            let onClickHandler = () => clickHandler(`${partOfPath}?page=${index + 1}`, index + 1);
            if (index === 7) { content = '...'; }
            if (index === 8) {
              content = totalPages;
              onClickHandler = () => clickHandler(`${partOfPath}?page=${totalPages}`, totalPages);
            }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={index === currentPage - 1 ? em : {}}
                onClick={onClickHandler}
              >
                { content }
              </button>);
          })
        }
        <button
          key={Math.random()}
          className={[css.button, css.arrowButton].join(' ')}
          type="button"
          onClick={() => clickHandler(`${partOfPath}?page=${currentPage + 1}`, currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  }

  // текущая страница в середине списка пагинации
  if (totalPages > slots && currentPage > continuum && currentPage <= totalPages - continuum) {
    const arr = [];
    const center = currentPage - 4;
    for (let i = center; i < center + 9; i += 1) { arr.push(i); }
    pagination = (
      <div className={css.Pagination}>
        <button
          key={Math.random()}
          className={[css.button, css.arrowButton].join(' ')}
          type="button"
          onClick={() => clickHandler(`${partOfPath}?page=${currentPage - 1}`, currentPage - 1)}
        >
          Prev
        </button>
        {
          arr.map((number, index) => {
            let content = number;
            let onClickHandler = () => clickHandler(`${partOfPath}?page=${number}`, number);
            if (index === 0) {
              content = '1';
              onClickHandler = () => clickHandler(`${partOfPath}?page=1`, 1);
            }
            if (index === 1 || index === 7) { content = '...'; }
            if (index === 8) {
              content = totalPages;
              onClickHandler = () => clickHandler(`${partOfPath}?page=${totalPages}`, totalPages);
            }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={number === currentPage ? em : {}}
                onClick={onClickHandler}
              >
                {content}
              </button>);
          })
        }
        <button
          key={Math.random()}
          className={[css.button, css.arrowButton].join(' ')}
          type="button"
          onClick={() => clickHandler(`${partOfPath}?page=${currentPage + 1}`, currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  }

  // текущая страница в конце списка пагинации
  if (totalPages > slots && currentPage > continuum && currentPage > totalPages - continuum) {
    const arr = [];
    const item = totalPages - slots + 1;
    for (let i = item; i <= totalPages; i += 1) { arr.push(i); }
    pagination = (
      <div className={css.Pagination}>
        <button
          key={Math.random()}
          className={[css.button, css.arrowButton].join(' ')}
          type="button"
          onClick={() => clickHandler(`${partOfPath}?page=${currentPage - 1}`, currentPage - 1)}
        >
          Prev
        </button>
        {
          arr.map((number, index) => {
            let content = number;
            let onClickHandler = () => clickHandler(`${partOfPath}?page=${number}`, number);
            if (index === 0) {
              content = '1';
              onClickHandler = () => clickHandler(`${partOfPath}?page=1`, 1);
            }
            if (index === 1) { content = '...'; }
            if (index === 8) { content = totalPages; }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={number === currentPage ? em : {}}
                onClick={onClickHandler}
              >
                {content}
              </button>);
          })
        }
      </div>
    );
  }

  return pagination;
};

Pagination.propTypes = {
  show: PropTypes.bool,
  totalPages: PropTypes.number,
  link: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  show: true,
  totalPages: 1,
  link: '',
};

const mapStateToProps = state => ({
  totalPages: state.pagination.totalPages,
  link: state.pagination.link,
  currentPage: state.pagination.currentPage,
});

const mapDispatchToProps = dispatch => ({
  clickHandler: (path, targetPage) => dispatch(
    actions.clickHandlerPaginationButton(path, targetPage),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
