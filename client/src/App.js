import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/redux-store';
import MainContainer from './components/MainContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainContainer/>
      </Router>
    </Provider>
  );
}

export default App;
