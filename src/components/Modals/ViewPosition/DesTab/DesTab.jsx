import React from 'react';
import * as S from './DesTabStyle';
import { DescriptionInput } from '../../../Input';

const DesTab = ({ edit, descriptionTab, position }) => {
  return (
    <S.DescriptionPositionWrapper descriptionTab={descriptionTab}>
      <S.Label>Position Description</S.Label>

      {edit ? (
        <DescriptionInput
          edit={true}
          type='textarea'
          value={position.description}
        />
      ) : (
        <S.Description>{position.description}</S.Description>
      )}
    </S.DescriptionPositionWrapper>
  );
};

export default DesTab;
