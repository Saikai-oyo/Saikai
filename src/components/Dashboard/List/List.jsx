import React, { useContext, useState, useEffect } from 'react';
import ViewPositionModal from '../../Modals/ViewPosition/ViewPositionModal';
import AddPositionModal from '../../Modals/AddPosition/AddPositionModal';
import Spinner from '../../Spinner/Spinner';
import onDragEnd from '../../../Utils/Dnd';
import { useMediaQuery } from 'react-responsive';
import { Accordion, AccordionToggle } from 'react-bootstrap';
import useKanban from '../../../hooks/useKanban';
import ListHeader from './ListHeader';
import ListBody from './ListBody';
import { DragDropContext } from 'react-beautiful-dnd';
import { app } from '../../../config/firebase';
import * as S from './style.js';
import Messages from '../../Messages/Messages';

// Context Imports

import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { PositionsContext } from '../../../contexts/PositionsContext';
import { useAuth } from '../../../contexts/AuthContext';

const List = (props = {}) => {
    const searchTerm = props.searchTerm || '';

    const { positions } = useContext(PositionsContext);
    const { setSelectedPosition } = useContext(SelectedPositionContext);
    const { currentUser } = useAuth();

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');

    const addSelectedPosition = (position) => {
        setSelectedPosition({ data: position.doc, selected: true });
    };
    const { initialData, setInitialData } = useKanban(currentUser.uid);

    const endDragHandler = onDragEnd(initialData, currentUser, setInitialData, app);

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' }, undefined);
    useEffect(() => {}, [isMobile]);

    return (
        <S.ListWrapper>
            {positions.loading ? (
                <Spinner />
            ) : (
                <DragDropContext onDragEnd={endDragHandler}>
                    {initialData &&
                        initialData.columns.map((column, index) => (
                            <Accordion key={column.id}>
                                <S.List collapse={isMobile} key={column.id}>
                                    <AccordionToggle eventKey={index + 1} as={'div'}>
                                        <ListHeader
                                            setIsCreateOpen={setIsCreateOpen}
                                            setSelectedTitle={setSelectedTitle}
                                            isMobile={isMobile}
                                            column={column}
                                        />
                                    </AccordionToggle>

                                    <Messages column={column} />

                                    {isMobile ? (
                                        <Accordion.Collapse eventKey={index + 1}>
                                            <ListBody
                                                setIsCreateOpen={setIsCreateOpen}
                                                setSelectedTitle={setSelectedTitle}
                                                isMobile={isMobile}
                                                searchTerm={searchTerm}
                                                uid={currentUser.uid}
                                                setIsViewOpen={setIsViewOpen}
                                                addSelectedPosition={addSelectedPosition}
                                                column={column}
                                                initialData={initialData}
                                            />
                                        </Accordion.Collapse>
                                    ) : (
                                        <ListBody
                                            setIsCreateOpen={setIsCreateOpen}
                                            setSelectedTitle={setSelectedTitle}
                                            isMobile={isMobile}
                                            searchTerm={searchTerm}
                                            uid={currentUser.uid}
                                            setIsViewOpen={setIsViewOpen}
                                            addSelectedPosition={addSelectedPosition}
                                            column={column}
                                            initialData={initialData}
                                        />
                                    )}
                                </S.List>
                            </Accordion>
                        ))}
                </DragDropContext>
            )}
            <AddPositionModal
                columnInfo={initialData && initialData.columns}
                selectedTitle={selectedTitle}
                open={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
            />
            <ViewPositionModal
                columns={initialData && initialData.columns}
                open={isViewOpen}
                onClose={() => setIsViewOpen(false)}
            />
        </S.ListWrapper>
    );
};

export default List;
