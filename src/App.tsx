import React from 'react';

// Libraries

import { BrowserRouter } from 'react-router-dom';

// Router
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
