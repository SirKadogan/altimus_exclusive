import React from 'react';

// Libraries
import { BrowserRouter } from 'react-router-dom';

// Hooks
import { AuthProvider } from './hooks/auth';

// Router
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
