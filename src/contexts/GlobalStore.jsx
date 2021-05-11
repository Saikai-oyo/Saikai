import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';
import { SelectedPositionContextProvider } from './SelectedPositionContext';
import { MessagesContextProvider } from './MessagesContext';
import { UserDetailsContextProvider } from './UserDetailsContext';
import { UpdatedPositionContextProvider } from './UpdatedPositionContext';

const GlobalStore = ({ children }) => {
  return (
    <UserDetailsContextProvider>
      <AuthProvider>
        <MessagesContextProvider>
          <PositionsContextProvider>
            <UpdatedPositionContextProvider>
              <SelectedPositionContextProvider>
                {children}
              </SelectedPositionContextProvider>
            </UpdatedPositionContextProvider>
          </PositionsContextProvider>
        </MessagesContextProvider>
      </AuthProvider>
    </UserDetailsContextProvider>
  );
};

export default GlobalStore;
