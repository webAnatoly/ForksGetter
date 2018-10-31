import React from 'react';
import PropTypes from 'prop-types';

import css from './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div className={css.Layout}>
        {/* navigation component can be here in the future */}
        <main className={css.main}>
          {children}
        </main>
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
