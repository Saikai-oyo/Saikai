import React from 'react';
import csc from 'country-state-city';
import { organizedData } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { app } from '../../../config/firebase';

import List from '../List/List';
import Navbar from '../Navbar/Navbar';
import './style.css';
import AddPosition from '../Backdrop/AddPosition/AddPosition';
import ShowPosition from '../Backdrop/ShowPosition/ShowPosition';

const Homepage = () => {
  const [selectedPosition, setSelectedPosition] = React.useState(null);
  const [addPosition, setAddPosition] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState('');
  const [cities, setCities] = React.useState([]);
  const [error, setError] = React.useState('');
  const [addFormError, setAddFormError] = React.useState('');
  const { currentUser } = useAuth();
  const [dataList, setDataList] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const [positionForm, setPositionForm] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection('positions')
      .onSnapshot((snapshot) => {
        const dbData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDataList(organizedData(dbData));
      });

    return () => unsubscribe();
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
    <div className='homepageWrapper'>
      <Navbar
        error={error}
        message={message}
        userDetails={userDetails}
        setError={setError}
        setMessage={setMessage}
      />

      <List
        dataList={dataList}
        currentUser={currentUser}
        setError={setError}
        setMessage={setMessage}
        setAddPosition={setAddPosition}
        setSelectedPosition={setSelectedPosition}
      />

      <AddPosition
        addPosition={addPosition}
        setAddPosition={setAddPosition}
        setMessage={setMessage}
        setPositionForm={setPositionForm}
        positionForm={positionForm}
        cities={cities}
        dataList={dataList}
        addFormError={addFormError}
        setAddFormError={setAddFormError}
        setError={setError}
        currentUser={currentUser}
      />

      <ShowPosition
        selectedPosition={selectedPosition}
        setPositionForm={setPositionForm}
        positionForm={positionForm}
        setSelectedPosition={setSelectedPosition}
        dataList={dataList}
        cities={cities}
        addFormError={addFormError}
        setAddFormError={setAddFormError}
        setError={setError}
        setMessage={setMessage}
        setAddPosition={setAddPosition}
      />
    </div>
  );
};

export default Homepage;
