import React, { useContext, useState } from 'react';
import ViewPositionModal from '../../Modals/ViewPosition/ViewPositionModal';
import AddPositionModal from '../../Modals/AddPosition/AddPositionModal';
import Spinner from '../../Spinner/Spinner';
import ListHeader from './ListHeader/ListHeader';
import ListCard from './ListCard/ListCard';
import Messages from '../../Messages/Messages';
import * as S from './style.js';

// Context Imports
import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { PositionsContext } from '../../../contexts/PositionsContext';
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
              <ListHeader
                positions={positions}
                handleFilter={handleFilter}
                setSelectedTitle={setSelectedTitle}
                setIsCreateOpen={setIsCreateOpen}
              />

              <Messages positions={positions} />

              <S.ListBody>
                {positions.items.map((position) => {
                  return (
                    currentUser.uid === position.uid &&
                    positions.title === position.status && (
                      <ListCard
                        positions={positions}
                        position={position}
                        addSelectedPosition={addSelectedPosition}
                        setIsViewOpen={setIsViewOpen}
                      />
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
