import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import Home from '../components/Home/Home';
import Results from '../components/Results/Results';

import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        {/* Если юзер запросит несуществующею страницу, перенаправить его на главную */}
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className={styles.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
