import React, { useState } from 'react';
import * as S from './style';
import Sort from '../Sort/Sort';

import { addIcon, filterIcon } from '../../../assets/icons';

const ListHeader = ({ column, setSelectedTitle, setIsCreateOpen }) => {
    const [isSortOpen, setToggle] = useState(false);

    const toggleSort = () => {
        setToggle(!isSortOpen);
    };

    return (
        <S.ListHeader positionTitle={column.title}>
            <S.FilterButton data-tooltip="Sort By">
                {isSortOpen && <Sort toggleSort={toggleSort} title={column.title} />}

                <img
                    onClick={() => {
                        toggleSort();
                        setSelectedTitle(column);
                    }}
                    src={filterIcon}
                    alt="Filter Icon"
                />
            </S.FilterButton>
            <S.HeaderTypography>{column.title}</S.HeaderTypography>

            <S.AddButton
                data-tooltip="Add Position"
                onClick={() => {
                    setSelectedTitle(column);
                    setIsCreateOpen(true);
                }}>
                <img src={addIcon} alt="Add Button" />
            </S.AddButton>
        </S.ListHeader>
    );
};

export default ListHeader;
