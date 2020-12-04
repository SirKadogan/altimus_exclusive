import React from 'react';

// Assets
import Logo from '../../assets/logo.png';

import styles from './styles.module.css';

interface HeaderProps {
  toggleSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSideBar }: HeaderProps) => {
  return (
    <div
      className={`p-col-12 ${styles.header} p-d-flex p-ai-center p-d-md-none`}
    >
      <i
        className="pi pi-bars p-ml-2 p-d-md-none"
        style={{ fontSize: '2em', color: 'rgba(255, 255, 255, 0.6)' }}
        onClick={() => toggleSideBar()}
      />
      <img className="p-ml-2" src={Logo} alt="logo" height={60} />
    </div>
  );
};

export default Header;
