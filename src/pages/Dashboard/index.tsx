import React, { useCallback } from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnProps } from 'primereact/column';

import styles from './styles.module.css';

const cars = [
  {
    plate: 'INX-5175',
    make: 'Ford',
    model: 'Fiesta',
    year: 2010,
    mileage: 95000,
  },
  {
    plate: 'INX-5175',
    make: 'Ford',
    model: 'Ka',
    year: 2010,
    mileage: 95000,
  },
  {
    plate: 'INX-5175',
    make: 'Ford',
    model: 'F10',
    year: 2010,
    mileage: 95000,
  },
  {
    plate: 'INX-5175',
    make: 'Ford',
    model: 'Nao sei',
    year: 2010,
    mileage: 95000,
  },
];

interface vehicles {
  plate: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
}

const Dashboard: React.SFC = () => {
  const renderRow = useCallback(
    (data: string | number): JSX.Element => <>{data}</>,
    [],
  );

  return (
    <div className="p-grid">
      <div className={`p-col-12 ${styles.header}`} />
      <div className={`p-col-2 ${styles['sidebar-container']}`} />
      <div className={`p-col-10 ${styles.content}`}>
        <Panel header="Veículos">
          <DataTable
            value={cars}
            className="p-datatable-responsive-demo"
            paginator
            rows={10}
          >
            <Column
              field="plate"
              header="Placa"
              body={(value: vehicles) => renderRow(value.plate)}
            />
            <Column
              field="make"
              header="Marca"
              body={(value: vehicles) => renderRow(value.make)}
            />
            <Column
              field="model"
              header="Modelo"
              body={(value: vehicles) => renderRow(value.model)}
            />
            <Column
              field="year"
              header="Ano"
              body={(value: vehicles) => renderRow(value.year)}
            />
            <Column
              field="mileage"
              header="Quilometragem"
              body={(value: vehicles) => renderRow(value.mileage)}
            />
          </DataTable>
        </Panel>
      </div>
    </div>
  );
};

export default Dashboard;
