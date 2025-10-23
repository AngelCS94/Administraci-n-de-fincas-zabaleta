import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Home from './js/pages/home.jsx';
import injectContext from './js/store/appContext.jsx';

function App() {
return (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
}

export default injectContext(App);