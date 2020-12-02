import React from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { Panel } from 'primereact/panel';

import styles from './styles.module.css';

const items = [
  { label: 'New', icon: 'pi pi-fw pi-plus' },
  { label: 'Delete', icon: 'pi pi-fw pi-trash' },
];

const Dashboard: React.SFC = () => {
  return (
    <div className="p-grid">
      <div className={`p-col-12 ${styles.header}`} />
      <div className={`p-col-2 ${styles['sidebar-container']}`} />
      <div className={`p-col-10 ${styles.content}`} />
    </div>
  );
};

export default Dashboard;
