import React, {
  createContext,
  useRef,
  useContext,
  MutableRefObject,
} from 'react';

import { Toast } from 'primereact/toast';

interface ToastProps {
  severity: string;
  title: string;
  body: string;
}

interface ToastContextData {
  showToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const myToast = useRef(null);

  const showToast = ({ severity, title, body }: ToastProps): void => {
    // @ts-ignore
    myToast.current.show({
      severity,
      summary: title,
      detail: body,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={myToast} />
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }
  return context;
}
