import React, { useState } from 'react';

// Libraries
import { Sidebar } from 'primereact/sidebar';

// Components
import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="p-grid">
      <Sidebar visible={isSideBarOpen} onHide={() => setSideBarOpen(false)}>
        quack
      </Sidebar>
      <div className="p-col-fixed sidebar-container p-d-none p-d-md-inline-flex" />
      <div className="p-col">
        <Header
          toggleSideBar={() => {
            console.log('quack');
            setSideBarOpen(!isSideBarOpen);
          }}
        />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
