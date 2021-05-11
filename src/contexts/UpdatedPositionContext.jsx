import React, { useState } from 'react';

const initialState = {
  updated: [],
  didUpdate: false,
};

export const UpdatedPositionContext = React.createContext(initialState);

export const UpdatedPositionContextProvider = ({ children }) => {
  const [updatedPosition, setUpdatedPosition] = useState(initialState);
  console.log('~ updatedPosition', updatedPosition);
  return (
    <UpdatedPositionContext.Provider
      value={{ updatedPosition, setUpdatedPosition }}
    >
      {children}
    </UpdatedPositionContext.Provider>
  );
};
