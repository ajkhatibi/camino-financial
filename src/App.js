import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import NavBar from './components/NavBar';
import Progress from './components/Progress';
import Chart from './components/Charts';
import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <div className='container-fluid'>
          <NavBar/>
          <Progress/>
          <Chart/>
        </div>
      </Provider>
    );
  }
}

