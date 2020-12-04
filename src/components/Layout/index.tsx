import React, { useState } from 'react';

// Libraries
import { Sidebar } from 'primereact/sidebar';

// Components
import Header from '../Header';
import CustomSidebar from '../CustomSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="p-grid">
      <Sidebar visible={isSideBarOpen} onHide={() => setSideBarOpen(false)}>
        <CustomSidebar />
      </Sidebar>
      <div className="p-col-fixed sidebar-container p-d-none p-d-md-inline-flex">
        <CustomSidebar />
      </div>
      <div className="p-col">
        <Header
          toggleSideBar={() => {
            setSideBarOpen(!isSideBarOpen);
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
