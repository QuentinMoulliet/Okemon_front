import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import ThemeHandler from './components/ThemeHandler/ThemeHandler';
import store from './store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeHandler />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
