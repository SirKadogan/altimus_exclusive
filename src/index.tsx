import React from 'react';
import ReactDOM from 'react-dom';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './index.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root'),
);
