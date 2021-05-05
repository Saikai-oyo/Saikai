import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';
import { SelectedPositionContextProvider } from './SelectedPositionContext';
import { MessagesContextProvider } from './MessagesContext';
import { UserDetailsContextProvider } from './UserDetailsContext';

const GlobalStore = ({ children }) => {
  return (
    <UserDetailsContextProvider>
      <AuthProvider>
        <MessagesContextProvider>
          <PositionsContextProvider>
            <SelectedPositionContextProvider>
              {children}
            </SelectedPositionContextProvider>
          </PositionsContextProvider>
        </MessagesContextProvider>
      </AuthProvider>
    </UserDetailsContextProvider>
  );
};

export default GlobalStore;
