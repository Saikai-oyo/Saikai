import React from 'react';
import * as S from './style';
import titles from '../../helpers/titles';

const StatusInput = ({ edit, id, placeholder, name, onChange, value }) => {
  return (
    <S.StatusInput
      value={value}
      edit={edit}
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    >
      {titles.map((title) => (
        <option key={title.label} value={title.value}>
          {title.label}
        </option>
      ))}
    </S.StatusInput>
  );
};

export default StatusInput;
