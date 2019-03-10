import React, { Component } from 'react';
import Table from './components/Table/Table';
import TableData from './assets/TableData'
import './App.scss';

const App = () => {
    return (
      <div className="game">
        <Table table={ TableData }/>
      </div>
    );
}

export default App;
