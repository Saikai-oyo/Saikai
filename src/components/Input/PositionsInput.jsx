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
  tabIndex,
}) => {
  return (
    <S.PositionsInput
      defaultValue={value}
      edit={edit}
      tabIndex={tabIndex}
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
