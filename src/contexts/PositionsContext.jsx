import React, { useState } from 'react';

const initialState = {
  data: [],
  loading: true,
};

export const PositionsContext = React.createContext(initialState);

export const PositionsContextProvider = ({ children }) => {
  const [positions, setPositions] = useState(initialState);
  return (
    <PositionsContext.Provider value={{ positions, setPositions }}>
      {children}
    </PositionsContext.Provider>
  );
};
