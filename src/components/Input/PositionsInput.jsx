import React from 'react';
import * as S from './style';

const PositionsInput = ({ type, id, placeholder, name, onChange }) => {
  return (
    <S.PositionsInput
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default PositionsInput;
