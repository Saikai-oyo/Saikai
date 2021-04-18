import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';
import { SelectedPositionContextProvider } from './SelectedPositionContext';

const GlobalStore = ({ children }) => {
  return (
    <AuthProvider>
      <PositionsContextProvider>
        <SelectedPositionContextProvider>
          {children}
        </SelectedPositionContextProvider>
      </PositionsContextProvider>
    </AuthProvider>
  );
};

export default GlobalStore;
