import React from 'react';
import * as S from './style';

const DateInput = ({ edit, type, id, placeholder, name, onChange, value }) => {
  return (
    <S.DateInput
      defaultValue={value}
      edit={edit}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    />
  );
};

export default DateInput;
