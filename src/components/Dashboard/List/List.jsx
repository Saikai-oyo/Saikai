import React, { useContext, useState } from 'react';
import { addIcon } from '../../../assets/icons';
import Spinner from '../../Spinner/Spinner';
import AddPositionModal from '../../Modals/AddPosition/AddPositionModal';
import ViewPositionModal from '../../Modals/ViewPosition/ViewPositionModal';
import * as S from './style.js';

// Context Imports
import { PositionsContext } from '../../../contexts/PositionsContext';
import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { useAuth } from '../../../contexts/AuthContext';

const List = () => {
  const { positions } = useContext(PositionsContext);
  const { setSelectedPosition } = useContext(SelectedPositionContext);
  const { currentUser } = useAuth();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const addSelectedPosition = (position) => {
    setSelectedPosition({ data: position, selected: true });
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
                <S.HeaderTypography title={positions.title}>
                  {positions.title}{' '}
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
