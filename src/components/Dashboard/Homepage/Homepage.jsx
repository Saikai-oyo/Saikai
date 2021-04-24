import React, { useContext } from 'react';
import csc from 'country-state-city';
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

  const [selectedPosition, setSelectedPosition] = React.useState(null);
  const [addPosition, setAddPosition] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState('');
  const [cities, setCities] = React.useState([]);
  const [error, setError] = React.useState('');
  const [addFormError, setAddFormError] = React.useState('');
  const { currentUser } = useAuth();
  // const [dataList, setDataList] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const [positionForm, setPositionForm] = React.useState(null);

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

  React.useEffect(() => {
    var docRef = app.firestore().collection('users').doc(`${currentUser.uid}`);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setUserDetails(doc.data());
      } else {
        console.error('No doc');
      }
    });
  }, []);

  React.useEffect(() => {
    try {
      const citiesData = csc.getCitiesOfCountry('IL');
      setCities(citiesData);
    } catch (error) {
      throw new Error('error:', error.message);
    }
  }, []);

  return (
    <S.HomepageWrapper>
      <Navbar
        error={information.error}
        message={information.message}
        userDetails={userDetails}
        setError={setError}
        setMessage={setMessage}
      />

      <List
        dataList={positionContext.positions.data}
        setError={setError}
        setMessage={setMessage}
        setAddPosition={setAddPosition}
      />

      <ShowPosition
        selectedPosition={selectedPosition}
        setPositionForm={setPositionForm}
        positionForm={positionForm}
        setSelectedPosition={setSelectedPosition}
        dataList={positionContext.positions.data}
        cities={cities}
        addFormError={addFormError}
        setAddFormError={setAddFormError}
        setError={setError}
        setMessage={setMessage}
        setAddPosition={setAddPosition}
      />
    </S.HomepageWrapper>
  );
};

export default Homepage;
