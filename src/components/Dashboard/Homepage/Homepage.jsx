import React, { useContext } from 'react';
import { organizedData } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { app } from '../../../config/firebase';

import { MessagesContext } from '../../../contexts/MessagesContext';
import { PositionsContext } from '../../../contexts/PositionsContext';

import List from '../List/List';
import Navbar from '../Navbar/Navbar';
import * as S from './style.js';
import ShowPosition from '../Backdrop/ShowPosition/ShowPosition';

const Homepage = () => {
  const positionContext = useContext(PositionsContext);
  const { information } = useContext(MessagesContext);

  const [error, setError] = React.useState('');
  const { currentUser } = useAuth();
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
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
      <Navbar
        error={information.error}
        message={information.message}
        setError={setError}
        setMessage={setMessage}
      />

      <List />

      <ShowPosition />
    </S.HomepageWrapper>
  );
};

export default Homepage;
