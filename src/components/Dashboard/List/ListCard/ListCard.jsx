import React from 'react';
import * as S from './style.js';

const ListCard = ({
  positions,
  position,
  addSelectedPosition,
  setIsViewOpen,
}) => {
  return (
    <S.PositionWrapper
      title={positions.title}
      key={position.id}
      onClick={() => {
        addSelectedPosition(position);
        setIsViewOpen(true);
      }}
    >
      <S.PositionHeader>{position.position}</S.PositionHeader>
      <S.PositionBody>{position.name}</S.PositionBody>
      <S.PositionFooter>{position.date}</S.PositionFooter>
    </S.PositionWrapper>
  );
};

export default ListCard;
