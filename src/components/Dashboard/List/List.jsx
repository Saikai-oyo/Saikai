import React from 'react';
import { addIcon, addIconBlack } from '../../../assets/icons';

import * as S from './style.js';
import './style.css';

const List = () => {
  const ren = () => {
    const arr = [
      'Applied',
      'In Progress',
      'Received Task',
      'Contract',
      'Denied',
    ];

    const arr2 = [
      'Full Stack Developer',
      'Product Manager',
      'Data Analyst ',
      'אלטעזאכן בשוק התקווה',
      'אלטעזאכן בשוק התקווה',
      'אלטעזאכן בשוק התקווה',
      'אלטעזאכן בשוק התקווה',
      'שופט בבית המשפט המחוזי באנטרטיקה',
      'Hamburger Speed Eating',
    ];

    const smallText = 'Schneider, Gutmann and Zboncak ';

    return arr.map((title) => {
      return (
        <S.List key={title}>
          <S.ListHeader title={title}>
            <S.HeaderTypography title={title}>{title} </S.HeaderTypography>
            <S.AddButton>
              <img
                src={title === 'Received Task' ? addIconBlack : addIcon}
                alt='Add Button'
              />
            </S.AddButton>
          </S.ListHeader>
          <S.ListBody>
            {arr2.map((positionHeader, index) => (
              <S.PositionWrapper title={title} key={index}>
                <S.PositionHeader>{positionHeader}</S.PositionHeader>
                <S.PositionBody>{smallText}</S.PositionBody>
              </S.PositionWrapper>
            ))}
          </S.ListBody>
        </S.List>
      );
    });
  };
  return <S.ListWrapper>{ren()}</S.ListWrapper>;
};

export default List;
