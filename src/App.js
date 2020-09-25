import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import  GlobalStyled from './styles/global';
import Header from './components/Header';

import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter history={history} >
        <Header/>
        <Routes/>
        <GlobalStyled/>
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
