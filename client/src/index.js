import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"

import { initMiddleware } from "devise-axios";
import { BrowserRouter } from "react-router-dom";
import ServiceProvider from './providers/ServiceProvider';
import AuthProvider from './providers/AuthProvider';

initMiddleware();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ServiceProvider>
          <App />
        </ServiceProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
