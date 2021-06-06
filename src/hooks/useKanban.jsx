import { useState, useEffect, useContext } from 'react';
import { app } from '../config/firebase';
import { PositionsContext } from '../contexts/PositionsContext';
import { isEqual } from 'lodash';

const useKanban = (userId) => {
    const { positions, setPositions } = useContext(PositionsContext);
    const [columns, setColumns] = useState(null);
    const [final, setFinal] = useState(null);

    useEffect(() => {
        console.log('%crunning before', 'background-color:green');
        return app
            .firestore()
            .collection('positions')
            .where('uid', '==', `${userId}`)
            .get()
            .then((querySnapshot) => {
                const source = querySnapshot.metadata.hasPendingWrites ? 'Local' : 'Server';
                const respondedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    doc: doc.data(),
                }));
                console.log('%csource', 'background-color:lightblue;color:black', source);
                // .then((respondedData) => {
                if (
                    (!isEqual(positions.data, respondedData) && source !== 'Local') ||
                    (isEqual(positions.data, respondedData) && source !== 'Server')
                ) {
                    console.log('%crunning after', 'background-color:blue');
                    console.log('positions', positions);
                    setPositions({
                        ...positions,
                        data: respondedData,
                        loading: false,
                    });
                }
            });
    }, [userId, positions, setPositions]);

    useEffect(() => {
        app.firestore()
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
            finalObject.columns = [];

            columns.forEach((col) => {
                switch (col.title) {
                    case 'Applied':
                        finalObject.columns[0] = col;
                        break;
                    case 'In Progress':
                        finalObject.columns[1] = col;
                        break;
                    case 'Received Task':
                        finalObject.columns[2] = col;
                        break;
                    case 'Contract':
                        finalObject.columns[3] = col;
                        break;
                    case 'Denied':
                        finalObject.columns[4] = col;
                        break;
                    default:
                        break;
                }
            });

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
