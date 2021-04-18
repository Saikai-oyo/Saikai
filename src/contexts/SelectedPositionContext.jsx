import React, { useState } from 'react';

const initialState = {
  data: [],
  selected: false,
};

export const SelectedPositionContext = React.createContext(initialState);

export const SelectedPositionContextProvider = ({ children }) => {
  const [position, setPosition] = useState(initialState);
  return (
    <SelectedPositionContext.Provider value={{ position, setPosition }}>
      {children}
    </SelectedPositionContext.Provider>
  );
};
