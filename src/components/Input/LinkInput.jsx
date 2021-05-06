import React from 'react';
import * as S from './style';

const LinkInput = ({ edit, value, type, id, placeholder, name, onChange }) => {
  return (
    <S.LinkInput
      value={value}
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

export default LinkInput;
