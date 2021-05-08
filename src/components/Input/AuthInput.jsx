import React from 'react';
import * as S from './style';

const AuthInput = ({ tabIndex, value, type, placeholder, name, onChange }) => {
  return (
    <S.AuthInput
      defaultValue={value}
      tabIndex={tabIndex}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default AuthInput;
