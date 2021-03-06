import React, { useCallback, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';

// Constants
import ADDONS from '../../constants/addons';

interface Vehicle {
  id: string;
  plate: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  addons: string[];
}

interface LooseObject {
  [key: string]: any;
}

interface DialogProps {
  hideDialog: React.Dispatch<void>;
  isVisible?: boolean;
  vehicle: Vehicle;
  editHandler: (editingVehicle: Vehicle) => void;
  createHandler: (editingVehicle: Vehicle) => void;
}

const VehicleForm: React.FC<DialogProps> = ({
  hideDialog,
  isVisible,
  editHandler,
  createHandler,
  vehicle,
}: DialogProps) => {
  const isEdit = Object.keys(vehicle).length > 0;
  const [editingVehicle, setEditingVehicle] = useState(vehicle);

  const [submitted, setSubmitted] = useState(false);

  const validateInputs = useCallback((): boolean => {
    return (
      !!editingVehicle.make &&
      !!editingVehicle.mileage &&
      !!editingVehicle.model &&
      !!editingVehicle.plate &&
      !!editingVehicle.year
    );
  }, [editingVehicle]);

  const submit = useCallback(() => {
    if (validateInputs()) {
      if (isEdit) {
        editHandler(editingVehicle);
      } else {
        createHandler(editingVehicle);
      }
    }
    setSubmitted(true);
  }, [editingVehicle, isEdit]);

  const saveVehicleDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={e => hideDialog()}
      />
      <Button
        label="Salvar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => submit()}
      />
    </>
  );

  const handleChange = useCallback(
    (e, field) => {
      const { value } = e.target;
      const newEdit = { ...editingVehicle } as LooseObject;
      newEdit[field] = value;
      setEditingVehicle(newEdit as Vehicle);
    },
    [editingVehicle],
  );

  return (
    <Dialog
      visible={isVisible}
      style={{ width: '450px' }}
      header="Veículo"
      modal
      className="p-fluid"
      footer={saveVehicleDialogFooter}
      onHide={hideDialog}
    >
      <div className="p-field">
        <label htmlFor="name">Placa</label>
        <InputText
          id="plate"
          value={editingVehicle.plate}
          onChange={e => handleChange(e, 'plate')}
          required
          autoFocus
          className={submitted && !editingVehicle.plate ? 'p-invalid' : ''}
        />
        {submitted && !editingVehicle.plate && (
          <small className="p-invalid">Campo obrigatório</small>
        )}
      </div>
      <div className="p-field">
        <label htmlFor="name">Marca</label>
        <InputText
          id="make"
          value={editingVehicle.make}
          onChange={e => handleChange(e, 'make')}
          required
          autoFocus
          className={submitted && !editingVehicle.make ? 'p-invalid' : ''}
        />
        {submitted && !editingVehicle.make && (
          <small className="p-invalid">Campo obrigatório</small>
        )}
      </div>
      <div className="p-field">
        <label htmlFor="name">Modelo</label>
        <InputText
          id="model"
          value={editingVehicle.model}
          onChange={e => handleChange(e, 'model')}
          required
          autoFocus
          className={submitted && !editingVehicle.model ? 'p-invalid' : ''}
        />
        {submitted && !editingVehicle.model && (
          <small className="p-invalid">Campo obrigatório</small>
        )}
      </div>
      <div className="p-field">
        <label htmlFor="name">Ano</label>
        <InputText
          id="year"
          value={editingVehicle.year}
          onChange={e => handleChange(e, 'year')}
          required
          autoFocus
          className={submitted && !editingVehicle.year ? 'p-invalid' : ''}
        />
        {submitted && !editingVehicle.year && (
          <small className="p-invalid">Campo obrigatório</small>
        )}
      </div>
      <div className="p-field">
        <label htmlFor="name">Quilometragem</label>
        <InputText
          id="mileage"
          value={editingVehicle.mileage}
          onChange={e => handleChange(e, 'mileage')}
          required
          autoFocus
          className={submitted && !editingVehicle.mileage ? 'p-invalid' : ''}
        />
        {submitted && !editingVehicle.mileage && (
          <small className="p-invalid">Campo obrigatório</small>
        )}
      </div>
      <div className="p-field">
        <label htmlFor="name">Opcionais</label>
        <MultiSelect
          value={editingVehicle.addons}
          options={ADDONS}
          onChange={e => handleChange(e, 'addons')}
        />
      </div>
    </Dialog>
  );
};

export default VehicleForm;
