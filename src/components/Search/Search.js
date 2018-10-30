import React from 'react';
// import PropTypes from 'prop-types';
import css from './Search.css';

const Search = (props) => {
  return (
    <div className={css.Search}>
      <input type="text" className={css.input} placeholder="Введите имя репозитория вида :owner/:repositoryName" />
    </div>

  );
};

// Search.propTypes = {

// };

// Search.defaultProps = {

// };

export default Search;
