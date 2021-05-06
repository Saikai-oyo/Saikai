import React from 'react';
import * as S from './style';

const PositionsInput = ({
  edit,
  type,
  id,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <S.PositionsInput
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

export default PositionsInput;
