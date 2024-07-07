import React from 'react'
import TransactionList from './component/TransactionList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Last Transactions</h3>
        <h5>See All</h5>
      </div>
      <TransactionList/>
    </div>
  )};

export default App;
