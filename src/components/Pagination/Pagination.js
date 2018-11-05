import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

import css from './Pagination.css';

const getBaseLink = link => link.substring(0, link.indexOf('?page='));

const Pagination = (props) => {
  const {
    show, totalPages, link, targetPage, currentPage,
  } = props;

  let pagination;
  let baseLink;
  const continuum = 7;
  const slots = 9;
  const em = {
    fontStyle: 'bold',
    transform: 'scale(1.2)',
  };

  if (link !== '') { baseLink = getBaseLink(link); }

  // если одна страница то пагинацию не показывать
  if (!show || totalPages === 1) { pagination = null; }

  // кол-во страниц меньше либо равно кол-ву слотов пагинации
  if (totalPages > 1 && totalPages <= slots) {
    pagination = (
      <div className={css.Pagination}>
        {
          Array(totalPages).fill('').map((btn, index) => (
            <button
              key={Math.random()}
              className={css.button}
              type="button"
              style={index === currentPage - 1 ? em : {}}
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
            if (index === 7) { content = '...'; }
            if (index === 8) { content = totalPages; }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={index === currentPage - 1 ? em : {}}
              >
                { content }
              </button>);
          })
        }
        <button key={Math.random()} className={[css.button, css.arrowButton].join(' ')} type="button">Next</button>
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
        <button key={Math.random()} className={[css.button, css.arrowButton].join(' ')} type="button">Prev</button>
        {
          arr.map((number, index) => {
            let content = number;
            if (index === 0) { content = '1'; }
            if (index === 1 || index === 7) { content = '...'; }
            if (index === 8) { content = totalPages; }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={number === currentPage ? em : {}}
              >
                {content}
              </button>);
          })
        }
        <button key={Math.random()} className={[css.button, css.arrowButton].join(' ')} type="button">Next</button>
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
        <button key={Math.random()} className={[css.button, css.arrowButton].join(' ')} type="button">Prev</button>
        {
          arr.map((number, index) => {
            let content = number;
            if (index === 0) { content = '1'; }
            if (index === 1) { content = '...'; }
            if (index === 8) { content = totalPages; }
            return (
              <button
                key={Math.random()}
                className={css.button}
                type="button"
                style={number === currentPage ? em : {}}
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
  targetPage: PropTypes.number,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  show: true,
  totalPages: 1,
  link: '',
  targetPage: 1,
  currentPage: 1,
};

const mapStateToProps = state => ({
  totalPages: state.pagination.totalPages,
  link: state.pagination.link,
  targetPage: state.pagination.targetPage,
});

export default connect(mapStateToProps)(Pagination);
