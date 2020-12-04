import React from 'react';

// Libraries
import { BrowserRouter } from 'react-router-dom';

// Hooks
import HookProvider from './hooks';

// Router
import Routes from './routes';

const App: React.FC = () => {
  return (
    <HookProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HookProvider>
  );
};

export default App;
