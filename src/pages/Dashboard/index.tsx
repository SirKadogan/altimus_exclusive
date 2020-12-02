import React, { useCallback, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
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

interface Vehicles {
  plate: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
}

const Dashboard: React.SFC = () => {
  const [filter, setFilter] = useState('');

  const renderRow = useCallback(
    ({ title, data }): JSX.Element => (
      <>
        <span className="p-column-title">{title}</span>
        {data}
      </>
    ),
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

  const renderActions = (rowData: Vehicles): JSX.Element => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => {}}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => {}}
        />
      </>
    );
  };

  return (
    <div className="p-grid">
      <div className={`p-col-12 ${styles.header}`} />
      <div className={`p-col-2 ${styles['sidebar-container']}`} />
      <div className={`p-col-10 ${styles.content}`}>
        <Panel header={renderHeader} className="datatable-responsive">
          <DataTable
            value={cars}
            className="p-datatable-responsive"
            paginator
            rows={10}
            globalFilter={filter}
          >
            <Column
              field="plate"
              header="Placa"
              body={(value: Vehicles) =>
                renderRow({ title: 'Placa', data: value.plate })
              }
            />
            <Column
              field="make"
              header="Marca"
              body={(value: Vehicles) =>
                renderRow({ title: 'Marca', data: value.make })
              }
            />
            <Column
              field="model"
              header="Modelo"
              body={(value: Vehicles) =>
                renderRow({ title: 'Modelo', data: value.model })
              }
            />
            <Column
              field="year"
              header="Ano"
              body={(value: Vehicles) =>
                renderRow({ title: 'Ano', data: value.year })
              }
            />
            <Column
              field="mileage"
              header="Quilometragem"
              body={(value: Vehicles) =>
                renderRow({ title: 'Quilometragem', data: value.mileage })
              }
            />
            <Column
              header="Ações"
              body={renderActions}
              // headerStyle={{ width: '10rem' }}
            />
          </DataTable>
        </Panel>
      </div>
    </div>
  );
};

export default Dashboard;
