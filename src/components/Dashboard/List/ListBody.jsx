import React from 'react';
import * as S from './style';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const ListBody = (props) => {
    return (
        <S.ListBody>
            <Droppable droppableId={props.column.id} type="position" key={props}>
                {(provided) => {
                    return (
                        <S.InnerList ref={provided.innerRef} {...provided.droppableProps}>
                            {props.column.positionIds

                                .filter((value) => {
                                    let position = props.initialData.positions[value];

                                    if (props.searchTerm === '') {
                                        return value;
                                    } else if (
                                        position &&
                                        position.doc.name.toLowerCase().includes(props.searchTerm.toLowerCase())
                                    ) {
                                        return value;
                                    } else if (
                                        position &&
                                        position.doc.position.toLowerCase().includes(props.searchTerm.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                })
                                .map((positionId, index) => {
                                    let position = props.initialData.positions[positionId];

                                    if (position) {
                                        return (
                                            props.uid === position.doc.uid &&
                                            props.column.title === position.doc.status && (
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
                                                                props.addSelectedPosition(position);
                                                                props.setIsViewOpen(true);
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
