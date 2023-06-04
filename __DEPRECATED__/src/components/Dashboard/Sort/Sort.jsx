import React, { useContext, useEffect } from 'react';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';
import { app } from '../../../config/firebase';
import { useTranslation } from 'react-i18next';
import * as S from './style.js';

const Sort = ({ title, toggleSort }) => {
    const { t } = useTranslation();
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
            <S.title>{t('sort.addedDate')}</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'date', 'asc');
                }}>
                {t('sort.date.oldToNew')}
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'date', 'desc');
                }}>
                {t('sort.date.newToOld')}
            </S.item>

            <S.title> {t('sort.positionName')}</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'position', 'asc');
                }}>
                {t('sort.aToz')}
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'position', 'desc');
                }}>
                {t('sort.zToa')}
            </S.item>

            <S.title> {t('sort.companyName')}</S.title>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'name', 'asc');
                }}>
                {t('sort.aToz')}
            </S.item>
            <S.item
                positionTitle={title}
                onClick={() => {
                    handleFilter(title, 'name', 'desc');
                }}>
                {t('sort.zToa')}
            </S.item>
        </S.container>
    );
};

export default Sort;
