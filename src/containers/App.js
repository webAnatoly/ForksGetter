import React from 'react';
import Layout from '../hoc/Layout/Layout';

import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let routes = '';
    if (true) {
      routes = 'таблица (компонент)';
    }

    return (
      <div className={styles.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
