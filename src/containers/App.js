import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.App}>
        <p>Приветствие</p>
        <div>Экран с приветствием и полем ввода поисковой строки</div>
        <div>Экран результатов поиска с аналогичной поисковой строкой.</div>
      </div>
    );
  }
}
