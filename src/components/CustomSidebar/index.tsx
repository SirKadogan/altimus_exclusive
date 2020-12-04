import React from 'react';

import {
  FaCar,
  FaChevronRight,
  FaSignOutAlt,
  FaBookOpen,
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

// Hooks
import { useAuth } from '../../hooks/auth';

// Assets
import Logo from '../../assets/logo.png';

import './styles.css';

const CustomSidebar: React.FC = () => {
  const { setIsAuthenticated } = useAuth();
  return (
    <div className="p-d-flex p-flex-column" style={{ width: '100%', flex: 1 }}>
      <img className="p-fluid p-as-center" src={Logo} alt="logo" height={150} />
      <NavLink
        to="/home"
        className="menu-item-container"
        activeClassName="active-menu-item"
      >
        <div className="p-d-flex p-ai-center">
          <FaCar className="p-mr-2" />
          <span>Veículos</span>
        </div>
        <FaChevronRight />
      </NavLink>
      <NavLink
        to="/about"
        className="menu-item-container"
        activeClassName="active-menu-item"
      >
        <div className="p-d-flex p-ai-center">
          <FaBookOpen className="p-mr-2" />
          <span>Sobre</span>
        </div>
        <FaChevronRight />
      </NavLink>
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
