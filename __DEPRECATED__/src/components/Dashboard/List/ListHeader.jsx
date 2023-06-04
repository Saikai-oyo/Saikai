import React from 'react';
import * as S from './style';
import ListButtons from './ListButtons';

const ListHeader = ({ column, setSelectedTitle, setIsCreateOpen, isMobile }) => {
    return (
        <S.ListHeader positionTitle={column.title}>
            <ListButtons
                display={`${isMobile ? 'none' : 'show'}`}
                column={column}
                setSelectedTitle={setSelectedTitle}
                setIsCreateOpen={setIsCreateOpen}
                isMobile={isMobile}
            />
        </S.ListHeader>
    );
};

export default ListHeader;
