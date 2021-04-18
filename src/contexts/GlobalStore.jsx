import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';

const GlobalStore = ({ children }) => {
  return (
    <AuthProvider>
      <PositionsContextProvider>{children}</PositionsContextProvider>
    </AuthProvider>
  );
};

export default GlobalStore;
