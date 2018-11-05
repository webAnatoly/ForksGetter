import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Search from '../Search/Search';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const Results = (props) => {
  const { error404, isInputValid, loading } = props;

  const messageOn404 = (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
      <p style={{ marginBottom: '.5rem' }}>Ничего не удалось найти.</p>
      <p>
        Возможно такого пользователя(репозитория) не существует или допущена
        ошибка при вводе имени пользователя(репозитория).
      </p>
    </div>);

  const messageInputNotValid = <p>Невалидный ввод</p>;

  let result;

  if (error404 && isInputValid) { result = messageOn404; }
  if (!error404 && isInputValid) { result = <Table />; }
  if (!isInputValid) { result = messageInputNotValid; }
  if (loading) { result = <Loader />; }

  return (
    <Aux>
      <Search />
      {result}
      <Pagination />
    </Aux>
  );
};

Results.propTypes = {
  error404: PropTypes.bool.isRequired,
  isInputValid: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

// Results.defaultProps = {

// };

const mapStateToProps = state => ({
  error404: state.remoteIterations.error404,
  isInputValid: state.main.isInputValid,
  loading: state.main.loading,
});

export default connect(mapStateToProps)(Results);
