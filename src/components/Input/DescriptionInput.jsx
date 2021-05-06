import React from 'react';
import * as S from './style';

const DescriptionInput = ({
  edit,
  value,
  type,
  id,
  placeholder,
  name,
  onChange,
  children,
}) => {
  return (
    <S.DescriptionInput
      edit={edit}
      defaultValue={value}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      autoComplete='new-password'
    >
      {children}
    </S.DescriptionInput>
  );
};

export default DescriptionInput;
