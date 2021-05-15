import React from 'react';
import * as S from './style.js';
import { addIcon, filterIcon } from '../../../../assets/icons';

const ListHeader = ({
  positions,
  handleFilter,
  setSelectedTitle,
  setIsCreateOpen,
}) => {
  return (
    <S.ListHeader title={positions.title}>
      <S.FilterButton onClick={() => handleFilter()}>
        <img src={filterIcon} alt='Filter Icon' />
      </S.FilterButton>
      <S.HeaderTypography title={positions.title}>
        {positions.title}
      </S.HeaderTypography>
      <S.AddButton
        onClick={() => {
          setSelectedTitle(positions.title);
          setIsCreateOpen(true);
        }}
      >
        <img src={addIcon} alt='Add Button' />
      </S.AddButton>
    </S.ListHeader>
  );
};

export default ListHeader;
