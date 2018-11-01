import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    const { onSubmit } = this.props;
    const { isValid, value } = this.state;
    let path = '';
    // const path = 'repos/webAnatoly/route-editor/forks';
    if (isValid) {
      path = value;
      onSubmit(path);
    } else {
      // показать предупреждение
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      isTouched: true,
    });
    this.checkValidity(event.target.value);
  }

  checkValidity = (str) => {
    console.log('valasdf', str);
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
          <input id="searchRequest" type="text" className={inputCssClasses.join(' ')} value={value} placeholder="Введите имя репозитория вида :owner/:repositoryName" onChange={this.handleChange} />
          <span className={css.label__hint}>Введите имя репозитория вида :owner/:repositoryName</span>
        </label>
      </form>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// Search.defaultProps = {

// };

const mapDispatchToProps = dispatch => ({
  onSubmit: path => dispatch(actions.submitInput(path)),
});

export default connect(null, mapDispatchToProps)(Search);
