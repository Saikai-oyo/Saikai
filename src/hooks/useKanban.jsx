import { useState, useEffect, useContext } from 'react';
import { app } from '../config/firebase';
import { PositionsContext } from '../contexts/PositionsContext';
import { isEqual } from 'lodash';

const useKanban = (userId) => {
    const { positions, setPositions } = useContext(PositionsContext);
    const [columns, setColumns] = useState(null);
    const [final, setFinal] = useState(null);

    useEffect(() => {
        const unsubscribe = app
            .firestore()
            .collection('positions')
            .where('uid', '==', `${userId}`)
            .orderBy('createdDate', 'desc')
            .onSnapshot(
                (snapshot) => {
                    let modified = false;
                    let added = false;
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === 'modified') {
                            modified = true;
                        }
                        if (change.type === 'added') {
                            added = true;
                        }
                    });
                    const source = snapshot.metadata.hasPendingWrites ? 'Local' : 'Server';
                    const respondedData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        doc: doc.data(),
                    }));
                    if (
                        (!isEqual(positions.data, respondedData) && source !== 'Local') ||
                        (!isEqual(positions.data, respondedData) && source === 'Local' && modified) ||
                        (positions.data < respondedData && source === 'Local' && added)
                    ) {
                        setPositions({
                            ...positions,
                            data: respondedData,
                            loading: false,
                        });
                    }
                },
                (error) => console.error(error.message),
            );

        return () => unsubscribe();
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
