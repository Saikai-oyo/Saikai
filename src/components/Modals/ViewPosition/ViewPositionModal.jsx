import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ViewTab from './ViewTab/ViewTab';
import DesTab from './DesTab/DesTab';

import { formatDate } from '../../../helpers';

import { blackExitIcon } from '../../../assets/icons';
import { SelectedPositionContext } from '../../../contexts/SelectedPositionContext';
import { UpdatedPositionContext } from '../../../contexts/UpdatedPositionContext';
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
  const { updatedPosition, setUpdatedPosition } = useContext(
    UpdatedPositionContext
  );

  const { setInformation } = useContext(MessagesContext);

  const handleUpdate = async () => {
    setInformation({
      errorLine: null,
      error: '',
      message: '',
      haveError: false,
      haveMessage: false,
    });
    if (!updatedPosition.didUpdate) {
      setInformation({
        errorLine: [selectedPosition.data.status, 'bad'],
        message: 'No changes was made!',
        haveError: true,
      });
      onClose();
      handleDecTab();
      setEdit(false);
      removeSelectedPosition();
    } else {
      var title = updatedPosition.updated.status
        ? updatedPosition.updated.status
        : selectedPosition.data.status;
      try {
        await app
          .firestore()
          .collection('positions')
          .doc(`${selectedPosition.data.id}`)
          .update({
            description: updatedPosition.updated.description
              ? updatedPosition.updated.description
              : selectedPosition.data.description,
            position: updatedPosition.updated.position
              ? updatedPosition.updated.position
              : selectedPosition.data.position,
            name: updatedPosition.updated.name
              ? updatedPosition.updated.name
              : selectedPosition.data.name,
            position_url: updatedPosition.updated.position_url
              ? updatedPosition.updated.position_url
              : selectedPosition.data.position_url,
            hr_name: updatedPosition.updated.hr_name
              ? updatedPosition.updated.hr_name
              : selectedPosition.data.hr_name,
            city: updatedPosition.updated.city
              ? updatedPosition.updated.city
              : selectedPosition.data.city,
            hr_mail: updatedPosition.updated.hr_mail
              ? updatedPosition.updated.hr_mail
              : selectedPosition.data.hr_mail,
            appliedBy: updatedPosition.updated.appliedBy
              ? updatedPosition.updated.appliedBy
              : selectedPosition.data.appliedBy,
            date: updatedPosition.updated.date
              ? formatDate(updatedPosition.updated.date)
              : selectedPosition.data.date,
            status: updatedPosition.updated.status
              ? updatedPosition.updated.status
              : selectedPosition.data.status,

            //TODO: Maybe will use it in later versions.
            // company_url: updatedPosition.updated.companyUrl
            //   && updatedPosition.updated.companyUrl
            // personalNote: updatedPosition.updated.personalNote
            //   && updatedPosition.updated.personalNote
          });

        setInformation({
          errorLine: [title, 'good'],
          message: 'Successfully Updated',
          haveMessage: true,
        });
        setUpdatedPosition({ updated: [], didUpdate: false });
      } catch (error) {
        setInformation({
          error: error.message,
          haveError: true,
        });
        console.error(error);
      }
    }
    onClose();
    handleDecTab();
    setEdit(false);
    removeSelectedPosition();

    setTimeout(() => {
      setInformation({
        errorLine: null,
        error: '',
        message: '',
        haveError: false,
        haveMessage: false,
      });
    }, 3500);
  };

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
        errorLine: null,
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
          edit={edit}
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
                edit={edit}
                onClick={() => handleDecTab()}
                descriptionTab={descriptionTab}
              >
                Description
              </S.DescriptionTab>
              <S.ViewTab
                onClick={() => handleViewTab()}
                viewTab={viewTab}
                edit={edit}
              >
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
                  <S.IconsBtn
                    icon='edit'
                    type='button'
                    onClick={() => handleEdit()}
                  />
                </div>
              </S.ButtonsWrapper>
            ) : (
              <S.ButtonsWrapper edit={edit}>
                <S.CloseButton onClick={() => handleEdit()}>
                  Cancel
                </S.CloseButton>
                <S.SubmitButton type='button' onClick={handleUpdate}>
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
