import React from 'react';
import * as S from './style';
import { Draggable } from 'react-beautiful-dnd';
import { formatDate } from '../../../helpers';

const Position = ({ doc, index, addSelectedPosition, setIsViewOpen, position }) => {
    return (
        <Draggable draggableId={doc.id} index={index}>
            {(provided) => (
                <S.PositionWrapper
                    data-tooltip={doc.position}
                    positionTitle={doc.status}
                    key={doc.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => {
                        addSelectedPosition(position);
                        setIsViewOpen(true);
                    }}>
                    <S.PositionHeader>{doc.position}</S.PositionHeader>
                    <S.PositionBody>{doc.name}</S.PositionBody>
                    <S.PositionFooter>{formatDate(doc.date)}</S.PositionFooter>
                </S.PositionWrapper>
            )}
        </Draggable>
    );
};

export default Position;
