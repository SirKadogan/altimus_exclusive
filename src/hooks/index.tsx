import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface ProviderProps {
  children: React.ReactNode;
}

const HookProvider: React.FC<ProviderProps> = ({ children }) => (
  <ToastProvider>
    <AuthProvider>{children}</AuthProvider>
  </ToastProvider>
);

export default HookProvider;
