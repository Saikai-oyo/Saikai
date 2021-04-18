import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';
import { SelectedPositionContextProvider } from './SelectedPositionContext';
import { MessagesContextProvider } from './MessagesContext';

const GlobalStore = ({ children }) => {
  return (
    <AuthProvider>
      <MessagesContextProvider>
        <PositionsContextProvider>
          <SelectedPositionContextProvider>
            {children}
          </SelectedPositionContextProvider>
        </PositionsContextProvider>
      </MessagesContextProvider>
    </AuthProvider>
  );
};

export default GlobalStore;
