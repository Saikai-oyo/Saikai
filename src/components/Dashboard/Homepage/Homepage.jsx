import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';
import { app } from '../../../config/firebase';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';
import * as S from './style.js';

const Homepage = () => {
    const positionContext = useContext(PositionsContext);
    const { currentUser } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        app.firestore()
            .collection('positions')
            .where('uid', '==', `${currentUser.uid}`)
            .orderBy('createdDate', 'desc')
            .onSnapshot((querySnapshot) => {
                const respondedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    doc: doc.data(),
                }));
                positionContext.setPositions({
                    ...positionContext.positions,
                    data: respondedData,
                    loading: false,
                });
            });
    }, []);

    return (
        <S.HomepageWrapper>
            <Navbar onSearch={setSearchTerm} />
            <List searchTerm={searchTerm} />
        </S.HomepageWrapper>
    );
};

export default Homepage;
