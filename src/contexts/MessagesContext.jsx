import React, { useState } from 'react';

const initialState = {
  error: '',
  message: '',
  haveError: false,
  haveMessage: false,
};

export const MessagesContext = React.createContext(initialState);

export const MessagesContextProvider = ({ children }) => {
  const [information, setInformation] = useState(initialState);
  return (
    <MessagesContext.Provider value={{ information, setInformation }}>
      {children}
    </MessagesContext.Provider>
  );
};
