import React from 'react';
import * as S from './style';

const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default Input;
