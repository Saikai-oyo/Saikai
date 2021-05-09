import React, { useState } from 'react';

const initialState = {
  data: [],
  selected: false,
};


export const SelectedPositionContext = React.createContext(initialState);

export const SelectedPositionContextProvider = ({ children }) => {
  const [selectedPosition, setSelectedPosition] = useState(initialState);
  return (
    <SelectedPositionContext.Provider
      value={{ selectedPosition, setSelectedPosition }}
    >
      {children}
    </SelectedPositionContext.Provider>
  );
};
