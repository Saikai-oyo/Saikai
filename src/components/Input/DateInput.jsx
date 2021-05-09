import React from 'react';
import * as S from './style';

const DateInput = ({
  tabIndex,
  edit,
  type,
  id,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <S.DateInput
      tabIndex={tabIndex}
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
