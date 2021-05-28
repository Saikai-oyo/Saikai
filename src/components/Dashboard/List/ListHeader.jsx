import React, { useState } from 'react';
import * as S from './style';
import Sort from '../Sort/Sort';

import { addIcon, filterIcon } from '../../../assets/icons';

const ListHeader = (props) => {
    const [isSortOpen, setToggle] = useState(false);

    const toggleSort = () => {
        setToggle(!isSortOpen);
    };

    return (
        <S.ListHeader positionTitle={props.column.title}>
            <S.FilterButton data-tooltip="Sort By">
                {isSortOpen && <Sort toggleSort={toggleSort} title={props.title} />}

                <img
                    onClick={() => {
                        toggleSort();
                        props.setSelectedTitle(props.column);
                    }}
                    src={filterIcon}
                    alt="Filter Icon"
                />
            </S.FilterButton>
            <S.HeaderTypography>{props.column.title}</S.HeaderTypography>

            <S.AddButton
                data-tooltip="Add Position"
                onClick={() => {
                    props.setSelectedTitle(props.column);
                    props.setIsCreateOpen(true);
                }}>
                <img src={addIcon} alt="Add Button" />
            </S.AddButton>
        </S.ListHeader>
    );
};

export default ListHeader;
