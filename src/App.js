import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import NavBar from './components/NavBar';
import Progress from './components/Progress';
import './css/App.css';
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className='container'>
          <NavBar/>
          <Progress/>
        </div>
      </Provider>
    );
  }
}

