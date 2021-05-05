import React, { useContext, useEffect } from 'react';
import ShowPosition from '../Backdrop/ShowPosition/ShowPosition';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';
import { organizedData } from '../../../helpers';
import { app } from '../../../config/firebase';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';
import * as S from './style.js';

const Homepage = () => {
  const positionContext = useContext(PositionsContext);
  const { currentUser } = useAuth();

  useEffect(() => {
    app
      .firestore()
      .collection('positions')
      .where('uid', '==', `${currentUser.uid}`)
      .onSnapshot((querySnapshot) => {
        const respondedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          doc: doc.data(),
        }));
        positionContext.setPositions({
          ...positionContext.positions,
          data: organizedData(respondedData),
          loading: false,
        });
      });
  }, []);

  return (
    <S.HomepageWrapper>
      <Navbar />
      <List />
      <ShowPosition />
    </S.HomepageWrapper>
  );
};

export default Homepage;
