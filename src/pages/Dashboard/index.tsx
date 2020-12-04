import React, { useCallback, useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Components
import DeleteDialog from '../../components/DeleteDialog';
import VehicleForm from '../../components/VehicleForm';
import Layout from '../../components/Layout';

// Constants
import VEHICLES from '../../constants/vehicles';

import styles from './styles.module.css';

interface Vehicles {
  id: string;
  plate: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  addons: string[];
}

const Dashboard: React.SFC = () => {
  const [filter, setFilter] = useState('');
  const [vehicles, setVehicles] = useState(VEHICLES);
  const [vehicleToDelete, setVehicleToDelete] = useState({} as Vehicles);
  const [vehicleToEdit, setVehicleToEdit] = useState({} as Vehicles);
  const [isVehicleFormOpen, setIsVehicleFormOpen] = useState(false);

  const renderRow = useCallback(
    ({ title, data }): JSX.Element => (
      <>
        <span className="p-column-title">{title}</span>
        {data}
      </>
    ),
    [],
  );

  const handleSearch = useCallback((e, handler) => {
    const target = e.target as HTMLInputElement;
    handler(target.value);
  }, []);

  const renderHeader = (
    <div className="table-header p-d-flex p-flex-column p-flex-sm-row p-jc-md-between">
      <span className="p-input-icon-left p-mt-2">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={e => handleSearch(e, setFilter)}
          placeholder="Pesquisar.."
        />
      </span>
      <span className="p-input-icon-left p-mt-2 ">
        <Button
          label="Novo"
          icon="pi pi-plus"
          onClick={() => setIsVehicleFormOpen(true)}
        />
      </span>
    </div>
  );

  const confirmDeleteVehicle = useCallback(() => {
    const filteredVehicles = vehicles.filter(
      car => car.id !== vehicleToDelete?.id,
    );
    setVehicleToDelete({} as Vehicles);
    setVehicles(filteredVehicles);
  }, [vehicles, vehicleToDelete]);

  const confirmEdit = useCallback(
    currentEdit => {
      const index = vehicles.findIndex(car => car.id === vehicleToEdit.id);
      const editedList = [...vehicles];

      if (index >= 0) {
        editedList[index] = currentEdit;
        setIsVehicleFormOpen(false);
        setVehicleToDelete({} as Vehicles);
        setVehicles(editedList);
      }
    },
    [vehicles, vehicleToEdit],
  );

  const confirmCreate = useCallback(
    newVehicle => {
      setIsVehicleFormOpen(false);
      setVehicles([newVehicle, ...vehicles]);
    },
    [vehicles],
  );

  const renderActions = (rowData: Vehicles): JSX.Element => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => {
            setIsVehicleFormOpen(true);
            setVehicleToEdit(rowData);
          }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={e => setVehicleToDelete(rowData)}
        />
      </>
    );
  };

  return (
    <Layout>
      <DeleteDialog
        deleteHandler={confirmDeleteVehicle}
        plate={vehicleToDelete?.plate}
        isVisible={Object.keys(vehicleToDelete).length > 0}
        hideDialog={() => setVehicleToDelete({} as Vehicles)}
      />
      {isVehicleFormOpen && (
        <VehicleForm
          createHandler={confirmCreate}
          editHandler={confirmEdit}
          vehicle={vehicleToEdit}
          isVisible={isVehicleFormOpen}
          hideDialog={() => {
            setIsVehicleFormOpen(false);
            setVehicleToEdit({} as Vehicles);
          }}
        />
      )}

      <div className={`p-col-12 ${styles.content}`}>
        <h1 style={{ color: 'rgba(255,255,255,0.6)' }}>Seus veículos</h1>
        <Panel header={renderHeader} className="datatable-responsive">
          <DataTable
            value={vehicles}
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
    </Layout>
  );
};

export default Dashboard;
