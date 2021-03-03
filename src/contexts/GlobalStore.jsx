import React from 'react';
import { AuthProvider } from './AuthContext';
const GlobalStore = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalStore;
