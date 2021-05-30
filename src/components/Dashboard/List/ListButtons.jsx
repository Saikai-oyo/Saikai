import React, { useState } from 'react';
import * as S from './style';
import Sort from '../Sort/Sort';
import { addIcon, filterIcon, blackAdd, blackFilter } from '../../../assets/icons';

const ListButtons = ({ display, column, padding = '', setSelectedTitle, setIsCreateOpen, isMobile }) => {
    const [isSortOpen, setToggle] = useState(false);

    const toggleSort = () => {
        setToggle(!isSortOpen);
    };

    const iconStyle = {
        height: '19px',
        width: '19px',
    };

    return (
        <S.ListButtonsWrapper padding={padding} display={display}>
            <S.FilterButton display={display} data-tooltip="Sort By">
                {isSortOpen && <Sort toggleSort={toggleSort} title={column.title} />}

                <img
                    style={iconStyle}
                    onClick={() => {
                        toggleSort();
                        setSelectedTitle(column);
                    }}
                    src={isMobile ? blackFilter : filterIcon}
                    alt="Filter Icon"
                />
            </S.FilterButton>
            <S.HeaderTypography>{column.title}</S.HeaderTypography>
            <S.AddButton
                display={display}
                data-tooltip="Add Position"
                onClick={() => {
                    setSelectedTitle(column);
                    setIsCreateOpen(true);
                }}>
                <img style={iconStyle} src={isMobile ? blackAdd : addIcon} alt="Add Button" />
            </S.AddButton>
        </S.ListButtonsWrapper>
    );
};

export default ListButtons;
