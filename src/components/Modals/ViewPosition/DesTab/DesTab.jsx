import React from 'react';
import * as S from './DesTabStyle';

const DesTab = ({ descriptionTab, position }) => {
  return (
    <S.DescriptionPositionWrapper descriptionTab={descriptionTab}>
      <S.Label>Position Description</S.Label>
      <S.Description>{position.description}</S.Description>
    </S.DescriptionPositionWrapper>
  );
};

export default DesTab;
