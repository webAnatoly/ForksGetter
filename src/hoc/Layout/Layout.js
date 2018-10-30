import React from 'react';
import PropTypes from 'prop-types';
import css from './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div></div>
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
