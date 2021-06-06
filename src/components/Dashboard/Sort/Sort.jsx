import React, { useContext, useEffect } from 'react';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';
import { app } from '../../../config/firebase';
import * as S from './style.js';

const Sort = ({ title, toggleSort }) => {
    const { currentUser } = useAuth();
    const { positions } = useContext(PositionsContext);

    useEffect(() => {
        const toggleSortListener = () => document.addEventListener('click', toggleSort);
        toggleSortListener();

        return () => {
            document.removeEventListener('click', toggleSort);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilter = (title, category, order) => {
        const sortedPositions = positions.data.filter((position) => {
            return position.doc.status === title && position.doc.uid === currentUser.uid;
        });
        switch (order) {
            case 'asc':
                if (category !== 'date') {
                    sortedPositions.sort((positionA, positionB) =>
                        positionA.doc[category].toLowerCase().trim() > positionB.doc[category].toLowerCase().trim()
                            ? 1
                            : positionB.doc[category].toLowerCase().trim() >
                              positionA.doc[category].toLowerCase().trim()
                            ? -1
                            : 0,
                    );
                } else {
                    sortedPositions.sort((positionA, positionB) =>
                        positionA.doc[category].split('-').reverse().join() >
                        positionB.doc[category].split('-').reverse().join()
                            ? 1
                            : positionB.doc[category].split('-').reverse().join() >
                              positionA.doc[category].split('-').reverse().join()
                            ? -1
                            : 0,
                    );
                }
                break;

            case 'desc':
                if (category !== 'date') {
                    sortedPositions.sort((positionA, positionB) =>
                        positionB.doc[category].toLowerCase().trim() > positionA.doc[category].toLowerCase().trim()
                            ? 1
                            : positionA.doc[category].toLowerCase().trim() >
                              positionB.doc[category].toLowerCase().trim()
                            ? -1
                            : 0,
                    );
                } else {
                    sortedPositions.sort((positionA, positionB) =>
                        positionB.doc[category].split('-').reverse().join() >
                        positionA.doc[category].split('-').reverse().join()
                            ? 1
                            : positionA.doc[category].split('-').reverse().join() >
                              positionB.doc[category].split('-').reverse().join()
                            ? -1
                            : 0,
                    );
                }
                break;
            default:
        }
        const ArraySortedPositions = [];
        sortedPositions.forEach((position) => {
            ArraySortedPositions.push(position.id);
        });

        app.firestore()
            .collection('users')
            .doc(`${currentUser.uid}`)
            .collection('columns')
            .doc(`${title.replace(/\s/g, '')}`)
            .update({ positionIds: ArraySortedPositions });

        toggleSort();
    };

    return (
        <S.container>
            <S.title> Added Date</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'date', 'asc');
                }}>
                oldest to newest
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'date', 'desc');
                }}>
                Newest to oldest
            </S.item>

            <S.title> Position Name</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'position', 'asc');
                }}>
                A to Z
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'position', 'desc');
                }}>
                Z to A
            </S.item>

            <S.title> Company Name</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'name', 'asc');
                }}>
                A to Z
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'name', 'desc');
                }}>
                Z to A
            </S.item>
        </S.container>
    );
};

export default Sort;
