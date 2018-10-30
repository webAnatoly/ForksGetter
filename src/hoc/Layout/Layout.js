import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';

import css from './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, showGreeting } = this.props;

    const greeting = (
      <div className={css.header__greeting}>
        <h2 className={css.header__greeting__h2}>Добро пожаловать!</h2>
        <p>
          Lorem ipsum dolor sit amet.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Enim reprehenderit et cupiditate culpa possimus sapiente ab a quibusdam,
          magnam quam deleniti, pariatur doloremque quasi voluptatem amet,
          sint beatae unde doloribus?
        </p>
      </div>);

    return (
      <div className={css.Layout}>
        {/* navigation component will be here in the future */}
        <div className={css.header}>
          {/* greeting component */}
          {/* search component */}
          {showGreeting ? greeting : null}
          <Search />
        </div>
        <main className={css.main}>
          {children}
        </main>
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node,
  showGreeting: PropTypes.bool,
};

Layout.defaultProps = {
  children: '',
  showGreeting: true,
  // showGreeting: false,
};

export default Layout;
