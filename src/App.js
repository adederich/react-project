import React, { Component } from 'react';
import SortList from './SortList';
import AddItemForm from './AddItemForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Andrew Dederich - Dovey</h1>
        </div>
        <div className="main-content">
          <SortList />
          <AddItemForm />
        </div>
      </div>
    );
  }
}

export default App;
