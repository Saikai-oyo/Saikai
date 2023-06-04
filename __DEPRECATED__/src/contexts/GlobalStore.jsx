import React from 'react';
import { AuthProvider } from './AuthContext';
import { PositionsContextProvider } from './PositionsContext';
import { SelectedPositionContextProvider } from './SelectedPositionContext';
import { MessagesContextProvider } from './MessagesContext';
import { UserDetailsContextProvider } from './UserDetailsContext';
import { UpdatedPositionContextProvider } from './UpdatedPositionContext';
import { LanguageContextProvider } from './LanguageContext';

const GlobalStore = ({ children }) => {
    return (
        <LanguageContextProvider>
            <UserDetailsContextProvider>
                <AuthProvider>
                    <MessagesContextProvider>
                        <PositionsContextProvider>
                            <UpdatedPositionContextProvider>
                                <SelectedPositionContextProvider>{children}</SelectedPositionContextProvider>
                            </UpdatedPositionContextProvider>
                        </PositionsContextProvider>
                    </MessagesContextProvider>
                </AuthProvider>
            </UserDetailsContextProvider>
        </LanguageContextProvider>
    );
};

export default GlobalStore;
