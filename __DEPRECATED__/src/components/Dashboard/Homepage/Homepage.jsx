import React, { useState } from 'react';
import DashboardNav from '../../Navbar/DashboardNav/DashboardNav';
import List from '../List/List';
import * as S from './style.js';

const Homepage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <S.HomepageWrapper>
            <DashboardNav onSearch={setSearchTerm} />
            <List searchTerm={searchTerm} />
        </S.HomepageWrapper>
    );
};

export default Homepage;
