import React, { useCallback, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
  const [filter, setFilter] = useState('');

  const renderRow = useCallback(
    (data: string | number): JSX.Element => <>{data}</>,
    [],
  );

  const handleSearch = useCallback(e => {
    const target = e.target as HTMLInputElement;
    setFilter(target.value);
  }, []);

  const renderHeader = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={handleSearch}
          placeholder="Pesquisar.."
        />
      </span>
    </div>
  );

  return (
    <div className="p-grid">
      <div className={`p-col-12 ${styles.header}`} />
      <div className={`p-col-2 ${styles['sidebar-container']}`} />
      <div className={`p-col-10 ${styles.content}`}>
        <Panel header={renderHeader}>
          <DataTable
            value={cars}
            className="p-datatable-responsive-demo"
            paginator
            rows={10}
            globalFilter={filter}
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
            <Column
              rowEditor
              headerStyle={{ width: '7rem' }}
              bodyStyle={{ textAlign: 'center' }}
            />
          </DataTable>
        </Panel>
      </div>
    </div>
  );
};

export default Dashboard;
