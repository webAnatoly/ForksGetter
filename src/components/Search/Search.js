import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actions';

import css from './Search.css';

const Search = (props) => {
  const { onSubmit } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(onSubmit);
    onSubmit();
  };

  return (
    <form className={css.Search} onSubmit={submitHandler}>
      <input type="text" className={css.input} placeholder="Введите имя репозитория вида :owner/:repositoryName" />
    </form>

  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// Search.defaultProps = {

// };

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(actions.submitInput()),
});

export default connect(null, mapDispatchToProps)(Search);
