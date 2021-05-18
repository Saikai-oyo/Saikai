import { useState, useEffect, useContext } from 'react';
import { app } from '../config/firebase';
import { PositionsContext } from '../contexts/PositionsContext';
import isEqual from 'lodash';

const useKanban = (userId) => {
  const { positions, setPositions } = useContext(PositionsContext);
  const [columns, setColumns] = useState(null);
  const [final, setFinal] = useState(null);

  useEffect(() => {
    return app
      .firestore()
      .collection('positions')
      .where('uid', '==', `${userId}`)
      .orderBy('createdDate', 'desc')
      .onSnapshot((querySnapshot) => {
        const respondedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        /* const sortedPositionsData = organizedData(respondedData); */
        console.log(isEqual(positions.data, respondedData));
        if (!isEqual(positions.data, respondedData)) {
          console.log(isEqual(positions.data, respondedData));
          setPositions({
            ...positions,
            data: respondedData,
            loading: false,
          });
        }
      });
  }, [userId, positions, setPositions]);

  useEffect(() => {
    console.log(userId);
    app
      .firestore()
      .collection(`users`)
      .doc(`${userId}`)
      .collection('columns')
      .onSnapshot((snapshot) => {
        const documents = [];
        snapshot.forEach((d) => {
          documents.push({ id: d.id, ...d.data() });
        });
        setColumns(documents);
      });
  }, [userId]);

  useEffect(() => {
    if (positions.data && columns) {
      const finalObject = {};

      finalObject.columns = columns;
      finalObject.positions = {};

      positions.data.forEach((position) => {
        finalObject.positions[position.id] = position;
      });

      setFinal(finalObject);
    }
  }, [columns, positions]);

  return { initialData: final, setInitialData: setFinal };
};

export default useKanban;
