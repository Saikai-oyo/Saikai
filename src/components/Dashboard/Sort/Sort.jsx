import React, { useContext, useState } from 'react';
import { PositionsContext } from '../../../contexts/PositionsContext';
import * as S from './style.js';
import { useAuth } from '../../../contexts/AuthContext';
import { PositionHeader } from '../List/style';
import useKanban from '../../../hooks/useKanban';
import { app } from '../../../config/firebase';


const Sort = ({ title }) => {
  const { currentUser } = useAuth();
  const { positions } = useContext(PositionsContext);
  const { initialData, setInitialData } = useKanban(currentUser.uid);



  const handleFilter = (title, category, order) => {
    const sortedPositions = positions.data.filter((position) => {
      return (position.doc.status === title && position.doc.uid === currentUser.uid)
    })

    switch (order) {
      case 'asc':
        if (category !== 'createdDate') {
          sortedPositions.sort((positonA, positonB) => (positonA.doc[category].toLowerCase() > positonB.doc[category].toLowerCase()) ? 1 : ((positonB.doc[category].toLowerCase() > positonA.doc[category].toLowerCase()) ? -1 : 0))
        } else {
          sortedPositions.sort((positonA, positonB) => (positonA.doc[category] > positonB.doc[category]) ? 1 : ((positonB.doc[category] > positonA.doc[category]) ? -1 : 0))
        }
        break;

      case 'desc':
        if (category !== 'createdDate') {
          sortedPositions.sort((positonA, positonB) => (positonB.doc[category].toLowerCase() > positonA.doc[category].toLowerCase()) ? 1 : ((positonA.doc[category].toLowerCase() > positonB.doc[category].toLowerCase()) ? -1 : 0))

        } else {
          sortedPositions.sort((positonA, positonB) => (positonB.doc[category] > positonA.doc[category]) ? 1 : ((positonA.doc[category] > positonB.doc[category]) ? -1 : 0))
        }
        break;
      default:
    }
    const idx = initialData.columns.findIndex((column) => {
      return column.id === title.replace(/\s/g, '')
    })
    const newPositionIds = {
      ...initialData.columns
    }
    const ArraySortedPositions = []
    sortedPositions.forEach(position => {
      ArraySortedPositions.push(position.id)

    });

    app
      .firestore()
      .collection('users')
      .doc(`${currentUser.uid}`)
      .collection('columns')
      .doc(`${title.replace(/\s/g, '')}`)
      .update({ positionIds: ArraySortedPositions });

  }

  return <S.container>
    <S.title> Added Date</S.title>
    <S.item title={title} onClick={() => handleFilter(title, 'createdDate', 'asc')}>First To Last</S.item>
    <S.item title={title} onClick={() => handleFilter(title, 'createdDate', 'desc')}  >Last To First</S.item>

    <S.title> Position Name</S.title>
    <S.item title={title} onClick={() => handleFilter(title, 'position', 'asc')}>A-Z</S.item>
    <S.item title={title} onClick={() => handleFilter(title, 'position', 'desc')}>Z-A</S.item>


    <S.title> Company Name</S.title>
    <S.item title={title} onClick={() => handleFilter(title, 'name', 'asc')}>A-Z</S.item>
    <S.item title={title} onClick={() => handleFilter(title, 'name', 'desc')} >Z-A</S.item>


  </S.container>
};

export default Sort;
