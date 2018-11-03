import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/actions';

import css from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false,
      isTouched: false,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {
      onSubmit, inputValid, notValidInput, loadStart, history,
    } = this.props;
    const {
      isValid, value,
    } = this.state;

    let path = '';

    if (isValid) {
      loadStart();
      history.push('/results'); // переместиться на страницу /results
      inputValid(); // меняем редаксовский state
      path = `repos/${value}/forks`;
      onSubmit(path);
    } else { // не валидный ввод
      notValidInput(); // меняем редаксовский state
      history.push('/results');
    }
  };

  handleChange = (event) => {
    const valid = this.checkValidity(event.target.value);
    this.setState({
      value: event.target.value,
      isTouched: true,
      isValid: valid,
    });
  }

  checkValidity = (str) => {
    const regexp = /^\/|\/.*\/| |[а-яА-ЯёЁ]|[:;?@&=+$,]|\/$/ig;
    /* Регулярка для проверки:
        недопустимых символов ";" | "/" | "?" | ":" | "@" | "&" | "=" | "+" | "$" | ","
        слеш в начале или конце строки
        больше одного слеша в строке,
        пробел,
        кириллица */

    const check = str.match(regexp);

    // проверка на наличие слеша (если слеша нет, значит ввели только имя пользователя)
    const oneslash = str.match(/\//g);

    return !check && !!oneslash; // если ввод валидный, то вернёт true
  };

  render() {
    const { value, isValid, isTouched } = this.state;
    const inputCssClasses = [css.input];

    if (isTouched && !isValid) {
      inputCssClasses.push(css.input__warn);
    }

    return (
      <form className={css.Search} onSubmit={this.submitHandler}>
        <label className={css.label} htmlFor="searchRequest">
          <input id="searchRequest" type="text" className={inputCssClasses.join(' ')} value={value} placeholder="Введите имя репозитория вида owner/repositoryName" onChange={this.handleChange} />
          <span className={css.label__hint}>Введите имя репозитория вида owner/repositoryName</span>
        </label>
      </form>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValid: PropTypes.func.isRequired,
  notValidInput: PropTypes.func.isRequired,
  loadStart: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

// Search.defaultProps = {

// };

const mapDispatchToProps = dispatch => ({
  onSubmit: path => dispatch(actions.submitInput(path)),
  inputValid: () => dispatch(actions.validInput()),
  notValidInput: () => dispatch(actions.notValidInput()),
  loadStart: () => dispatch(actions.loadStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
