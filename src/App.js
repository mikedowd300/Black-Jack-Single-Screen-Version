import React, { Component } from 'react';
import Table from './components/Table/Table';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="game">
        <Table />
      </div>
    );
  }
}

export default App;
