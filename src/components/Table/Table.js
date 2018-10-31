import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';

// import * as actions from '../../store/actions/actions';

import css from './Table.css';

const Table = ({ array }) => {
  let data = array;

  if (!data || !data.length) {
    data = null;
  } else {
    data = data.map(forker => (
      <tr>
        <td>{forker.owner.login}</td>
        <td>{forker.full_name}</td>
        <td>{forker.stargazers_count}</td>
        <td><a href={forker.html_url}>{forker.html_url}</a></td>
      </tr>
    ));
  }

  return (
    <table className={css.Table}>
      <caption className={css.caption}>Forks репозитория repoName</caption>
      <thead className={css.thead}>
        <tr>
          <th>Название репозитария</th>
          <th>Владелец</th>
          <th>Кол-во звезд</th>
          <th>Ссылка на репозитарий форка</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {data}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  array: PropTypes.node, // ожидаю получить массив
};

Table.defaultProps = {
  array: [],
};
const mapStateToProps = state => ({
  array: state.array,
});

export default connect(mapStateToProps)(Table);
