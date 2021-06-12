import React, { useState, useEffect } from 'react';
import Sort from '../Sort/Sort';
import { addIcon, filterIcon, blackAdd, blackFilter } from '../../../assets/icons';
import { useTranslation } from 'react-i18next';
import translatedListTitles from '../../../helpers/translatedListTitles';

import * as S from './style';

const ListButtons = ({ display, column, padding = '', setSelectedTitle, setIsCreateOpen, isMobile }) => {
    const { t } = useTranslation();
    const [isSortOpen, setToggle] = useState(false);

    const toggleSort = () => {
        setToggle(!isSortOpen);
    };

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setToggle(false);
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, []);
    const iconStyle = {
        height: '19px',
        width: '19px',
    };

    return (
        <S.ListButtonsWrapper padding={padding} display={display}>
            <S.FilterButton display={display} data-tooltip={t('dashboard.tooltips.sortBy')}>
                {isSortOpen && <Sort toggleSort={toggleSort} title={column.title} />}

                <img
                    style={iconStyle}
                    onClick={() => {
                        toggleSort();
                        setSelectedTitle(column);
                    }}
                    src={isMobile ? blackFilter : filterIcon}
                    alt="Sort Icon"
                />
            </S.FilterButton>
            {<S.HeaderTypography>{translatedListTitles(t, column.title)}</S.HeaderTypography>}
            <S.AddButton
                display={display}
                data-tooltip={t('dashboard.tooltips.addPosition')}
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
