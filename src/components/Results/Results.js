import React from 'react';
// import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Search from '../Search/Search';
import Table from '../Table/Table';

const Results = (props) => {
  return (
    <Aux>
      <Search />
      <Table />
    </Aux>
  );
};

// Results.propTypes = {

// };

// Results.defaultProps = {

// };

export default Results;
