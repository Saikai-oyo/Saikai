import React, { useContext } from 'react';
import { addIcon, addIconBlack } from '../../../assets/icons';
import Spinner from '../../Spinner/Spinner';
import * as S from './style.js';
import './style.css';
// Context Imports
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';

const List = () => {
  const { positions } = useContext(PositionsContext);
  const { currentUser } = useAuth();

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
                <S.AddButton>
                  <img
                    src={
                      positions.title === 'Received Task'
                        ? addIconBlack
                        : addIcon
                    }
                    alt='Add Button'
                  />
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
    </S.ListWrapper>
  );
};

export default List;
