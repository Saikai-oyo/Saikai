import React, { useState } from 'react';

const initialState = {
  errorLine: null,
  error: '',
  message: '',
  haveError: false,
  haveMessage: false,
};

export const MessagesContext = React.createContext(initialState);

export const MessagesContextProvider = ({ children }) => {
  const [information, setInformation] = useState(initialState);
  console.log('information', information);
  return <MessagesContext.Provider value={{ information, setInformation }}>{children}</MessagesContext.Provider>;
};
