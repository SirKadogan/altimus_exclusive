import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface DialogProps {
  hideDialog: React.Dispatch<void>;
  isVisible?: boolean;
  plate: string;
  deleteHandler: () => void;
}

const DeleteDialog: React.FC<DialogProps> = ({
  hideDialog,
  isVisible,
  deleteHandler,
  plate,
}: DialogProps) => {
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={e => hideDialog()}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteHandler}
      />
    </>
  );

  return (
    <Dialog
      visible={isVisible}
      style={{ width: '450px' }}
      header="Confirmar"
      modal
      footer={deleteProductDialogFooter}
      onHide={hideDialog}
    >
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle p-mr-3"
          style={{ fontSize: '2rem' }}
        />

        <span>
          Tem certeza que deseja deletar o veículo de placa <b>{plate}</b>?
        </span>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
