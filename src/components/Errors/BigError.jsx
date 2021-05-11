import React from 'react';
import * as S from './style';

const BigError = ({ children, show }) => {
  return <S.BigError show={show}>{children}</S.BigError>;
};

export default BigError;
