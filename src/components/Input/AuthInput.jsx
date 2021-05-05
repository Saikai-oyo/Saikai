import React from 'react';
import * as S from './style';

const AuthInput = ({ type, placeholder, name, onChange }) => {
  return (
    <S.AuthInput
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default AuthInput;
