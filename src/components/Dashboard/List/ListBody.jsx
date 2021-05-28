import React from 'react';
import * as S from './style';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const ListBody = ({ column, initialData, searchTerm, uid, addSelectedPosition, setIsViewOpen }) => {
    return (
        <S.ListBody>
            <Droppable droppableId={column.id} type="position" key={column.id}>
                {(provided) => {
                    return (
                        <S.InnerList ref={provided.innerRef} {...provided.droppableProps}>
                            {column.positionIds
                                .filter((value) => {
                                    let position = initialData.positions[value];

                                    if (searchTerm === '') {
                                        return value;
                                    } else if (
                                        position &&
                                        position.doc.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return value;
                                    } else if (
                                        position &&
                                        position.doc.position.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                })
                                .map((positionId, index) => {
                                    let position = initialData.positions[positionId];

                                    if (position) {
                                        return (
                                            uid === position.doc.uid &&
                                            column.title === position.doc.status && (
                                                <Draggable
                                                    draggableId={position.doc.id}
                                                    index={index}
                                                    key={position.doc.id}>
                                                    {(provided, snapshot) => (
                                                        <S.PositionWrapper
                                                            data-tooltip={position.doc.position}
                                                            positionTitle={position.doc.status}
                                                            key={position.doc.id}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            onClick={() => {
                                                                addSelectedPosition(position);
                                                                setIsViewOpen(true);
                                                            }}>
                                                            <S.PositionHeader>{position.doc.position}</S.PositionHeader>
                                                            <S.PositionBody>{position.doc.name}</S.PositionBody>
                                                            <S.PositionFooter>{position.doc.date}</S.PositionFooter>
                                                        </S.PositionWrapper>
                                                    )}
                                                </Draggable>
                                            )
                                        );
                                    }
                                })}

                            {provided.placeholder}
                        </S.InnerList>
                    );
                }}
            </Droppable>
        </S.ListBody>
    );
};

export default ListBody;
