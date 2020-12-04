import React from 'react';

import {
  FaCar,
  FaChevronRight,
  FaSignOutAlt,
  FaBookOpen,
} from 'react-icons/fa';

// Hooks
import { useAuth } from '../../hooks/auth';

import './styles.css';

const CustomSidebar: React.FC = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <div style={{ width: '100%', flex: 1 }}>
      <div
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: 100,
          flex: 1,
          marginBottom: 10,
        }}
      />

      <div className="active-menu-item menu-item-container ">
        <div className="p-d-flex p-ai-center">
          <FaCar className="p-mr-2" />
          <span>Veículos</span>
        </div>
        <FaChevronRight />
      </div>
      <div className="menu-item-container">
        <div className="p-d-flex p-ai-center">
          <FaBookOpen className="p-mr-2" />
          <span>Sobre</span>
        </div>
        <FaChevronRight />
      </div>
      <div
        className="menu-item-container"
        onClick={() => {
          setIsAuthenticated(false);
          localStorage.removeItem('customToken');
        }}
      >
        <div className="p-d-flex p-ai-center">
          <FaSignOutAlt className="p-mr-2" />
          <span>Sair</span>
        </div>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default CustomSidebar;
