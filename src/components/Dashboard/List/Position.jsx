import React from 'react';
import * as S from './style';
import { Draggable } from 'react-beautiful-dnd';
import { formatDate } from '../../../helpers';

const Position = ({ index, addSelectedPosition, setIsViewOpen, position }) => {
    return (
        <Draggable draggableId={position.id.toString()} index={index}>
            {(provided) => (
                <S.PositionWrapper
                    data-tooltip={position.position}
                    positionTitle={position.status}
                    key={position.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => {
                        addSelectedPosition(position);
                        setIsViewOpen(true);
                    }}>
                    <S.PositionHeader>{position.position}</S.PositionHeader>
                    <S.PositionBody>{position.name}</S.PositionBody>
                    <S.PositionFooter>{formatDate(position.date)}</S.PositionFooter>
                </S.PositionWrapper>
            )}
        </Draggable>
    );
};

export default Position;
