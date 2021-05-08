import React from 'react';
import * as S from './style';

const AdvanceInputs = ({
  edit,
  value,
  type,
  id,
  placeholder,
  name,
  onChange,
  tabIndex,
}) => {
  return (
    <S.AdvanceInputs
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

export default AdvanceInputs;
