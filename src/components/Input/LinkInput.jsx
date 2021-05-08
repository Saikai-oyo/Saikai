import React from 'react';
import * as S from './style';

const LinkInput = ({
  tabIndex,
  edit,
  value,
  type,
  id,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <S.LinkInput
      defaultValue={value}
      tabIndex={tabIndex}
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
