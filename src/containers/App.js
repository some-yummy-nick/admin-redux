import React, { Component } from 'react';
import store from "../store/index";
import dispatchBtnAction from '../actions';

class App extends Component {
  render() {
  	const state = store.getState();

	  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to {state.item}</h1>
        </header>
	      <button onClick={dispatchBtnAction}>Поменять</button>
      </div>
    );
  }
}

export default App;
