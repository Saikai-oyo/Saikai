import React, { useContext } from 'react';
import * as S from './DesTabStyle';
import { DescriptionInput } from '../../../Input';
import { UpdatedPositionContext } from '../../../../contexts/UpdatedPositionContext';
import styled from 'styled-components';

const Pre = styled.pre`
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  font-family: 'Assistant', sans-serif;
`;

const DesTab = ({ edit, descriptionTab, position }) => {
  const { updatedPosition, setUpdatedPosition } = useContext(
    UpdatedPositionContext
  );
  return (
    <S.DescriptionPositionWrapper descriptionTab={descriptionTab}>
      <S.Label>Position Description</S.Label>

      {edit ? (
        <DescriptionInput
          edit={true}
          type='textarea'
          value={position.description}
          onChange={(e) =>
            setUpdatedPosition({
              updated: {
                ...updatedPosition.updated,
                description: e.target.value,
              },
              didUpdate: true,
            })
          }
        />
      ) : (
        <S.Description>
          <Pre>{position.description}</Pre>
        </S.Description>
      )}
    </S.DescriptionPositionWrapper>
  );
};

export default DesTab;
