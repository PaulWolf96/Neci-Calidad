import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import { ApiProvider } from './context/ApiContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApiProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </ApiProvider>
  </BrowserRouter>
);


