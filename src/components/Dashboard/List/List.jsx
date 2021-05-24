/* eslint-disable array-callback-return */
import React, {  useContext, useState } from "react";
import ViewPositionModal from "../../Modals/ViewPosition/ViewPositionModal";
import AddPositionModal from "../../Modals/AddPosition/AddPositionModal";
import Spinner from "../../Spinner/Spinner";
import { addIcon, filterIcon } from "../../../assets/icons";
import useKanban from "../../../hooks/useKanban";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { app } from "../../../config/firebase";
import * as S from "./style.js";

// Context Imports
import { SelectedPositionContext } from "../../../contexts/SelectedPositionContext";
import { PositionsContext } from "../../../contexts/PositionsContext";
import { MessagesContext } from "../../../contexts/MessagesContext";
import { useAuth } from "../../../contexts/AuthContext";

// props = { searchTerm: ""}
// List = (props)
const List = (props = {}) => {
  const searchTerm = props.searchTerm || "";

  const { positions } = useContext(PositionsContext);
  const { setSelectedPosition } = useContext(SelectedPositionContext);
  const { information } = useContext(MessagesContext);
  const { currentUser } = useAuth();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const addSelectedPosition = (position) => {
    setSelectedPosition({ data: position.doc, selected: true });
  };
  const { initialData, setInitialData } = useKanban(currentUser.uid);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const startColumn = initialData.columns.find(
      (col) => col.id === source.droppableId
    );
    const startColumnIndex = initialData.columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const endColumn = initialData.columns.find(
      (col) => col.id === destination.droppableId
    );
    const endColumnIndex = initialData.columns.findIndex(
      (col) => col.id === destination.droppableId
    );

    if (startColumn === endColumn) {
      const newPositionIds = Array.from(endColumn.positionIds);

      newPositionIds.splice(source.index, 1);
      newPositionIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...endColumn,
        positionIds: newPositionIds,
      };

      const newState = {
        ...initialData,
        columns: [...initialData.columns],
      };

      newState.columns[endColumnIndex] = newColumn;

      app
        .firestore()
        .collection("users")
        .doc(`${currentUser.uid}`)
        .collection("columns")
        .doc(`${startColumn.id}`)
        .update({ positionIds: newPositionIds });

      setInitialData(newState);

      return;
    }

    const startPositionIDs = Array.from(startColumn.positionIds);
    startPositionIDs.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIds: startPositionIDs,
    };

    const finishPositionIDs = Array.from(endColumn.positionIds);
    finishPositionIDs.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...endColumn,
      taskIds: finishPositionIDs,
    };

    const newState = {
      ...initialData,
      columns: [...initialData.columns],
    };

    newState.columns[startColumnIndex] = newStart;
    newState.columns[endColumnIndex] = newFinish;

    app
      .firestore()
      .collection("users")
      .doc(`${currentUser.uid}`)
      .collection("columns")
      .doc(`${startColumn.id}`)
      .update({ positionIds: startPositionIDs });

    app
      .firestore()
      .collection("users")
      .doc(`${currentUser.uid}`)
      .collection("columns")
      .doc(`${endColumn.id}`)
      .update({ positionIds: finishPositionIDs });

    app
      .firestore()
      .collection("positions")
      .doc(`${draggableId}`)
      .update({ status: endColumn.title });
    setInitialData(newState);
  };

  const handleFilter = () => {
    // TODO:Create the filter here...
  };

  return (
    <S.ListWrapper>
      {positions.loading ? (
        <Spinner />
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          {initialData &&
            initialData.columns.map((column, index) => {
              return (
                <S.List key={column.id}>
                  <S.ListHeader title={column.title}>
                    <S.FilterButton onClick={() => handleFilter()}>
                      <img src={filterIcon} alt="Filter Icon" />
                    </S.FilterButton>
                    <S.HeaderTypography title={column.title}>
                      {column.title}
                    </S.HeaderTypography>
                    <S.AddButton
                      onClick={() => {
                        setSelectedTitle(column);
                        setIsCreateOpen(true);
                      }}
                    >
                      <img src={addIcon} alt="Add Button" />
                    </S.AddButton>
                  </S.ListHeader>
                  {information.errorLine &&
                  positions.title === information.errorLine[0] ? (
                    information.errorLine[1] === "bad" ? (
                      <S.ListMessages message="bad">
                        <span>{information.message}</span>
                      </S.ListMessages>
                    ) : (
                      <S.ListMessages message="good">
                        <span>{information.message}</span>
                      </S.ListMessages>
                    )
                  ) : (
                    ""
                  )}

                  <S.ListBody>
                    <Droppable
                      droppableId={column.id}
                      type="position"
                      key={props}
                    >
                      {(provided) => {
                        return (
                          <S.InnerList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {column.positionIds
                              .filter((value) => {
                                let position = initialData.positions[value];
                                if (searchTerm === "") {
                                  return value;
                                } else if (
                                  position &&
                                  position.doc.name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return value;
                                } else if (
                                  position &&
                                  position.doc.position
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return value;
                                }
                              })
                              .map((positionId, index) => {
                                let position =
                                  initialData.positions[positionId];

                                if (position) {
                                  return (
                                    currentUser.uid === position.doc.uid &&
                                    column.title === position.doc.status && (
                                      <Draggable
                                        draggableId={position.doc.id}
                                        index={index}
                                        key={position.doc.id}
                                      >
                                        {(provided, snapshot) => (
                                          <S.PositionWrapper
                                            title={position.doc.title}
                                            key={position.doc.id}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={() => {
                                              addSelectedPosition(position);
                                              setIsViewOpen(true);
                                            }}
                                          >
                                            <S.PositionHeader>
                                              {position.doc.position}
                                            </S.PositionHeader>
                                            <S.PositionBody>
                                              {position.doc.name}
                                            </S.PositionBody>
                                            <S.PositionFooter>
                                              {position.doc.date}
                                            </S.PositionFooter>
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
                </S.List>
              );
            })}
        </DragDropContext>
      )}
      <AddPositionModal
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

/*
{
  "columns": [
    {
      "id": "Applied",
      "positionIds": [
        ""
      ],
      "title": "Applied"
    },
    {
      "id": "InProgress",
      "positionIds": [
        "e818e5e3-1293-4457-b00c-0024831fef20"
      ],
      "title": "In Progress"
    },
    {
      "id": "ReceivedTask",
      "positionIds": [
        "f66b58a2-0fbd-48c2-bf2e-f7b600f5efa3",
        "7682877d-6367-47f2-984f-397904bdc20a",
        "",
        "2d43da57-a009-439d-8eab-0eec7da017c3"
      ],
      "title": "Received Task"
    },
    {
      "id": "Contract",
      "title": "Contract",
      "positionIds": [
        "f5a3381c-079a-43d3-9488-b63435cfa4c0",
        "",
        "45bae013-67a9-4edb-93c5-aea8483f6ff8"
      ]
    },
    {
      "id": "Denied",
      "positionIds": [
        "d80a4e0d-6659-4ecd-bb7e-53fa08f9552b",
        "",
        "ef241512-b57e-43cf-b26a-f7551ba0e3a3"
      ],
      "title": "Denied"
    }
  ],
  "positions": {
    "45bae013-67a9-4edb-93c5-aea8483f6ff8": {
      "id": "45bae013-67a9-4edb-93c5-aea8483f6ff8",
      "doc": {
        "createdDate": 1621374779976,
        "city": "",
        "id": "45bae013-67a9-4edb-93c5-aea8483f6ff8",
        "position": "111",
        "hr_name": "",
        "position_url": "",
        "date": "19-05-2021",
        "description": "",
        "appliedBy": "",
        "hr_mail": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "status": "Applied",
        "name": "Unknown Company"
      }
    },
    "d80a4e0d-6659-4ecd-bb7e-53fa08f9552b": {
      "id": "d80a4e0d-6659-4ecd-bb7e-53fa08f9552b",
      "doc": {
        "position_url": "",
        "name": "Unknown Company",
        "date": "19-05-2021",
        "appliedBy": "",
        "position": "ertyuytr",
        "hr_name": "",
        "id": "d80a4e0d-6659-4ecd-bb7e-53fa08f9552b",
        "createdDate": 1621374772704,
        "status": "Denied",
        "description": "",
        "hr_mail": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "city": ""
      }
    },
    "ef241512-b57e-43cf-b26a-f7551ba0e3a3": {
      "id": "ef241512-b57e-43cf-b26a-f7551ba0e3a3",
      "doc": {
        "date": "19-05-2021",
        "city": "",
        "position": "fgdfgdfg",
        "hr_mail": "",
        "createdDate": 1621374708469,
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "id": "ef241512-b57e-43cf-b26a-f7551ba0e3a3",
        "name": "dfgdfgdfg",
        "hr_name": "",
        "appliedBy": "",
        "description": "",
        "position_url": "",
        "status": "Applied"
      }
    },
    "e818e5e3-1293-4457-b00c-0024831fef20": {
      "id": "e818e5e3-1293-4457-b00c-0024831fef20",
      "doc": {
        "status": "Contract",
        "description": "",
        "hr_mail": "",
        "appliedBy": "",
        "date": "19-05-2021",
        "position": "dsfsdfsdf",
        "hr_name": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "createdDate": 1621374686621,
        "position_url": "",
        "city": "",
        "id": "e818e5e3-1293-4457-b00c-0024831fef20",
        "name": "sdfsdfsd"
      }
    },
    "2d43da57-a009-439d-8eab-0eec7da017c3": {
      "id": "2d43da57-a009-439d-8eab-0eec7da017c3",
      "doc": {
        "name": "sdfsdfsd",
        "appliedBy": "",
        "status": "Applied",
        "position": "dgsdfsdf",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "description": "",
        "hr_mail": "",
        "hr_name": "",
        "id": "2d43da57-a009-439d-8eab-0eec7da017c3",
        "position_url": "",
        "city": "",
        "createdDate": 1621374663902,
        "date": "19-05-2021"
      }
    },
    "f66b58a2-0fbd-48c2-bf2e-f7b600f5efa3": {
      "id": "f66b58a2-0fbd-48c2-bf2e-f7b600f5efa3",
      "doc": {
        "description": "",
        "position_url": "",
        "date": "18-05-2021",
        "position": "sad",
        "appliedBy": "",
        "name": "Unknown Company",
        "status": "Received Task",
        "id": "f66b58a2-0fbd-48c2-bf2e-f7b600f5efa3",
        "createdDate": 1621338423113,
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "hr_name": "",
        "hr_mail": "",
        "city": ""
      }
    },
    "7682877d-6367-47f2-984f-397904bdc20a": {
      "id": "7682877d-6367-47f2-984f-397904bdc20a",
      "doc": {
        "createdDate": 1621335781807,
        "position_url": "",
        "status": "Received Task",
        "city": "",
        "hr_name": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "date": "18-05-2021",
        "description": "",
        "appliedBy": "",
        "hr_mail": "",
        "name": "Unknown Company",
        "id": "7682877d-6367-47f2-984f-397904bdc20a",
        "position": "fb"
      }
    },
    "f5a3381c-079a-43d3-9488-b63435cfa4c0": {
      "id": "f5a3381c-079a-43d3-9488-b63435cfa4c0",
      "doc": {
        "status": "Contract",
        "name": "Unknown Company",
        "createdDate": 1621335089294,
        "city": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "id": "f5a3381c-079a-43d3-9488-b63435cfa4c0",
        "date": "18-05-2021",
        "appliedBy": "",
        "position": "adds",
        "description": "",
        "position_url": "",
        "hr_mail": "",
        "hr_name": ""
      }
    },
    "10e0754d-6466-4d3b-9aa4-5536276faa46": {
      "id": "10e0754d-6466-4d3b-9aa4-5536276faa46",
      "doc": {
        "position": "PMO",
        "city": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "hr_name": "",
        "name": "Project AI",
        "position_url": "",
        "date": "16-05-2021",
        "status": "In Progress",
        "createdDate": 1621171500886,
        "appliedBy": "",
        "description": "",
        "id": "10e0754d-6466-4d3b-9aa4-5536276faa46",
        "hr_mail": ""
      }
    },
    "3c02c0ed-9219-4062-8419-8ff99903786d": {
      "id": "3c02c0ed-9219-4062-8419-8ff99903786d",
      "doc": {
        "city": "",
        "position_url": "",
        "position": "Front-end developer",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "date": "16-05-2021",
        "name": "Bad Company :-(",
        "hr_name": "",
        "hr_mail": "",
        "status": "Denied",
        "createdDate": 1621171477635,
        "id": "3c02c0ed-9219-4062-8419-8ff99903786d",
        "appliedBy": "",
        "description": ""
      }
    },
    "6927aea6-e06e-4b5b-ba3d-4c922d92e981": {
      "id": "6927aea6-e06e-4b5b-ba3d-4c922d92e981",
      "doc": {
        "date": "16-05-2021",
        "city": "",
        "position": "Full Stack developer",
        "description": "",
        "appliedBy": "",
        "hr_name": "",
        "id": "6927aea6-e06e-4b5b-ba3d-4c922d92e981",
        "hr_mail": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "status": "Contract",
        "position_url": "",
        "createdDate": 1621171468041,
        "name": "Amagon"
      }
    },
    "8609290e-2ea8-4ad3-b408-181ca455f432": {
      "id": "8609290e-2ea8-4ad3-b408-181ca455f432",
      "doc": {
        "createdDate": 1621171446072,
        "name": "Hero",
        "id": "8609290e-2ea8-4ad3-b408-181ca455f432",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "city": "",
        "status": "Received Task",
        "date": "16-05-2021",
        "appliedBy": "",
        "hr_name": "",
        "hr_mail": "",
        "description": "",
        "position_url": "",
        "position": "Front-end developer"
      }
    },
    "4493ec9c-e900-4d29-993a-ebfeadfbd437": {
      "id": "4493ec9c-e900-4d29-993a-ebfeadfbd437",
      "doc": {
        "position": "CEO",
        "hr_mail": "",
        "city": "",
        "date": "16-05-2021",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "id": "4493ec9c-e900-4d29-993a-ebfeadfbd437",
        "status": "In Progress",
        "description": "",
        "appliedBy": "",
        "name": "FB",
        "position_url": "",
        "hr_name": "",
        "createdDate": 1621171416954
      }
    },
    "cdfd4d05-0b53-4ea0-a255-59ed787153ac": {
      "id": "cdfd4d05-0b53-4ea0-a255-59ed787153ac",
      "doc": {
        "hr_mail": "",
        "status": "Applied",
        "appliedBy": "",
        "name": "Picaso",
        "position": "Product design",
        "hr_name": "",
        "city": "",
        "id": "cdfd4d05-0b53-4ea0-a255-59ed787153ac",
        "date": "16-05-2021",
        "description": "",
        "createdDate": 1621171408970,
        "position_url": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2"
      }
    },
    "f3964e2b-50b2-415b-ad8f-b065bcc50363": {
      "id": "f3964e2b-50b2-415b-ad8f-b065bcc50363",
      "doc": {
        "name": "Goooogle",
        "createdDate": 1621171379430,
        "date": "16-05-2021",
        "status": "Applied",
        "city": "",
        "position_url": "",
        "description": "",
        "position": "Product manager",
        "hr_name": "",
        "id": "f3964e2b-50b2-415b-ad8f-b065bcc50363",
        "appliedBy": "",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "hr_mail": ""
      }
    },
    "cec31ac8-b6fe-4e61-983e-1955d06a483e": {
      "id": "cec31ac8-b6fe-4e61-983e-1955d06a483e",
      "doc": {
        "id": "cec31ac8-b6fe-4e61-983e-1955d06a483e",
        "name": " ",
        "hr_mail": "",
        "description": "",
        "createdDate": 1621171353323,
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "position_url": "",
        "hr_name": "",
        "status": "Applied",
        "date": "16-05-2021",
        "city": "",
        "position": "Junior Front-end developer",
        "appliedBy": ""
      }
    },
    "129d5747-92e7-425d-acd9-9184c137908d": {
      "id": "129d5747-92e7-425d-acd9-9184c137908d",
      "doc": {
        "name": "Saikai",
        "description": "Join now to Saikai!\nThe best web platform to manage your job search !!!",
        "city": "Tel Aviv",
        "position": "Front-end developer",
        "id": "129d5747-92e7-425d-acd9-9184c137908d",
        "appliedBy": "google",
        "hr_mail": "contactus@saikai.me",
        "createdDate": 1621171343785,
        "date": "16-05-2021",
        "hr_name": "Idan",
        "uid": "7ONs9DPGd9b0vzZmkK6XQt04GGl2",
        "status": "Applied",
        "position_url": "https://saikai.me"
      }
    }
  }
}
*/
