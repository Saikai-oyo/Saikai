import React, { useContext, useState } from 'react';
import ViewPositionModal from '../../Modals/ViewPosition/ViewPositionModal';
import AddPositionModal from '../../Modals/AddPosition/AddPositionModal';
import Spinner from '../../Spinner/Spinner';
import { addIcon, filterIcon } from '../../../assets/icons';

import * as S from './style.js';

// Context Imports
import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { useAuth } from '../../../contexts/AuthContext';

const List = () => {
  const { positions } = useContext(PositionsContext);
  const { setSelectedPosition } = useContext(SelectedPositionContext);
  const { information } = useContext(MessagesContext);
  console.log('~ information', information);
  const { currentUser } = useAuth();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const addSelectedPosition = (position) => {
    setSelectedPosition({ data: position, selected: true });
  };

  const handleFilter = () => {
    // TODO:Create the filter here...
  };

  return (
    <S.ListWrapper>
      {positions.loading ? (
        <Spinner />
      ) : (
        positions.data.map((positions) => {
          return (
            <S.List key={positions.title}>
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
              {information.errorLine &&
              positions.title === information.errorLine[0] ? (
                information.errorLine[1] === 'bad' ? (
                  <S.ListMessages message='bad'>
                    <span>{information.message}</span>
                  </S.ListMessages>
                ) : (
                  <S.ListMessages message='good'>
                    <span>{information.message}</span>
                  </S.ListMessages>
                )
              ) : (
                ''
              )}
              <S.ListBody>
                {positions.items.map((position) => {
                  return (
                    currentUser.uid === position.uid &&
                    positions.title === position.status && (
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
                    )
                  );
                })}
              </S.ListBody>
            </S.List>
          );
        })
      )}
      <AddPositionModal
        selectedTitle={selectedTitle}
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
      <ViewPositionModal
        open={isViewOpen}
        onClose={() => setIsViewOpen(false)}
      />
    </S.ListWrapper>
  );
};

export default List;
