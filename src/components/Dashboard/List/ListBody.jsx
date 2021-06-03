import React from 'react';
import * as S from './style';
import { Droppable } from 'react-beautiful-dnd';
import Position from './Position';
import ListButtons from './ListButtons';

const ListBody = ({
    setSelectedTitle,
    setIsCreateOpen,
    isMobile,
    column,
    initialData,
    searchTerm,
    uid,
    addSelectedPosition,
    setIsViewOpen,
}) => {
    return (
        <S.ListBody>
            {isMobile && (
                <ListButtons
                    padding="show"
                    display={`${isMobile ? 'show' : 'none'}`}
                    column={column}
                    setSelectedTitle={setSelectedTitle}
                    setIsCreateOpen={setIsCreateOpen}
                    isMobile={isMobile}
                />
            )}
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
                                    return null;
                                })
                                .map((positionId, index) => {
                                    let position = initialData.positions[positionId];

                                    if (position) {
                                        return (
                                            uid === position.doc.uid &&
                                            column.title === position.doc.status && (
                                                <Position
                                                    key={position.doc.id}
                                                    doc={position.doc}
                                                    position={position}
                                                    index={index}
                                                    addSelectedPosition={addSelectedPosition}
                                                    setIsViewOpen={setIsViewOpen}
                                                />
                                            )
                                        );
                                    }
                                    return null;
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
