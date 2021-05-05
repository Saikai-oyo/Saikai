import React from 'react';
import * as S from './style';

const AdvanceInputs = ({ type, id, placeholder, name, onChange }) => {
  return (
    <S.AdvanceInputs
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default AdvanceInputs;
