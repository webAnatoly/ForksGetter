import React from 'react';
// import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import Search from '../Search/Search';

import css from './Home.css';

const Home = () => (
  <Aux>
    <div className={css.Home}>
      <h2 className={css.greeting__h2}>Добро пожаловать!</h2>
      <p>Текст приветствия и описание приложения.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ducimus maxime. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, et libero!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis iste fugiat, excepturi mollitia expedita laborum optio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolore tempora eum nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas veniam rem asperiores explicabo? Provident, ad esse. Cumque, ipsa! Repellat, ut eos?</p>
    </div>
    <Search />
  </Aux>);

// Home.propTypes = {

// };

// Home.defaultProps = {

// };

export default Home;
