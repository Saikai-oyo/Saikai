import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ViewTab from './ViewTab/ViewTab';
import DesTab from './DesTab/DesTab';

import { blackExitIcon } from '../../../assets/icons';
import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { app } from '../../../config/firebase';

import * as S from './style';

const ViewPositionModal = ({ open, onClose }) => {
  // TODO: When we update the state, the page rerender and we need to use UseMemo maybe.
  const [descriptionTab, setDescriptionTab] = useState(true);
  const [viewTab, setViewTab] = useState(!descriptionTab);
  const [edit, setEdit] = useState(false);
  const { selectedPosition, setSelectedPosition } = useContext(
    SelectedPositionContext
  );
  const { setInformation } = useContext(MessagesContext);

  const handleDelete = async (id) => {
    setInformation({
      errorLine: null,
      error: '',
      message: '',
      haveError: false,
      haveMessage: false,
    });
    try {
      await app.firestore().collection('positions').doc(`${id}`).delete();
      setInformation({
        errorLine: [selectedPosition.data.status, 'bad'],
        message: 'Successfully Deleted!',
        haveMessage: true,
      });
    } catch (error) {
      setInformation({
        error: 'Can not delete position!',
        haveError: true,
      });
      console.error(error);
    }
    onClose();
    removeSelectedPosition();

    setTimeout(() => {
      setInformation({
        error: '',
        message: '',
        haveError: false,
        haveMessage: false,
      });
    }, 3500);
  };

  const removeSelectedPosition = () =>
    setSelectedPosition({ data: [], selected: false });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('work hard');
  };

  const handleDecTab = () => {
    setDescriptionTab(true);
    setViewTab(false);
  };
  const handleViewTab = () => {
    setDescriptionTab(false);
    setViewTab(true);
  };

  const handleEdit = () => setEdit(!edit);

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <S.BackDrop
        onClick={() => {
          removeSelectedPosition();
          handleDecTab();
          setEdit(false);
          onClose();
        }}
      />
      <S.ModalWrapper edit={edit}>
        <S.ExitBtn
          onClick={() => {
            removeSelectedPosition();
            handleDecTab();
            setEdit(false);
            onClose();
          }}
        >
          <img src={blackExitIcon} alt='X' />
        </S.ExitBtn>
        <S.Body>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <S.Tabs>
              <S.DescriptionTab
                onClick={() => handleDecTab()}
                descriptionTab={descriptionTab}
              >
                Description
              </S.DescriptionTab>
              <S.ViewTab onClick={() => handleViewTab()} viewTab={viewTab}>
                View Position
              </S.ViewTab>
            </S.Tabs>

            <DesTab
              edit={edit}
              descriptionTab={descriptionTab}
              position={selectedPosition.data}
            />
            <ViewTab
              edit={edit}
              viewTab={viewTab}
              position={selectedPosition.data}
            />
            {!edit ? (
              <S.ButtonsWrapper>
                <S.CloseButton
                  onClick={() => {
                    removeSelectedPosition();
                    handleDecTab();
                    setEdit(false);
                    onClose();
                  }}
                >
                  Close
                </S.CloseButton>

                <div
                  style={{
                    width: '6rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <S.IconsBtn
                    icon='delete'
                    onClick={() => {
                      if (
                        window.confirm(
                          'Are you sure you want to delete this position?'
                        )
                      )
                        handleDelete(selectedPosition.data.id);
                    }}
                  />
                  <S.IconsBtn icon='edit' onClick={() => handleEdit()} />
                </div>
              </S.ButtonsWrapper>
            ) : (
              <S.ButtonsWrapper edit={edit}>
                <S.CloseButton onClick={() => handleEdit()}>
                  Cancel
                </S.CloseButton>
                <S.SubmitButton type='button' onClick={handleOnSubmit}>
                  Save
                </S.SubmitButton>
              </S.ButtonsWrapper>
            )}
          </form>
        </S.Body>
      </S.ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default ViewPositionModal;
