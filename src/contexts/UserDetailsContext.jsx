import React, { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  loading: true,
};

export const UserDetailsContext = React.createContext(initialState);

export const UserDetailsContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(initialState);
  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
};
