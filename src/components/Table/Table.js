import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import css from './Table.css';

const Table = ({ array, targetRepoName }) => {
  let data = array;

  if (Array.isArray(data)) {
    data = data.map((forker) => {
      let owner;
      let url;
      const repoName = forker.full_name ? forker.full_name : 'не удалось получить корректные данные';
      const stars = forker.stargazers_count !== undefined ? forker.stargazers_count : 'не удалось получить корректные данные';
      let key;

      if (forker.owner) {
        owner = forker.owner.login;
        // если вдруг forker.owner.login == undefined, то сгенерировать рандомный key
        key = forker.owner.login ? forker.owner.login : Math.random() + Math.random();
      } else {
        owner = 'не удалось получить корректные данные';
        key = Math.random() + Math.random();
      }

      if (forker.html_url) {
        url = forker.html_url;
      } else {
        url = '#';
      }

      return (
        <tr key={key}>
          <td>{repoName}</td>
          <td>{owner}</td>
          <td>{stars}</td>
          <td><a href={url}>{url}</a></td>
        </tr>
      );
    });
  } else {
    data = null;
  }

  return (
    <table className={css.Table}>
      <caption className={css.caption}>{`Forks репозитория ${targetRepoName}`}</caption>
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
  array: PropTypes.oneOfType([PropTypes.array]), // ожидаю получить массив
  targetRepoName: PropTypes.string.isRequired,
};

Table.defaultProps = {
  array: [],
};
const mapStateToProps = state => ({
  array: state.table.array,
  targetRepoName: state.main.targetRepoName,
});

export default connect(mapStateToProps)(Table);
