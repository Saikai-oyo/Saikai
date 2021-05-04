import React, { useState, useContext, useEffect } from 'react';
import * as S from './style';
import ReactDOM from 'react-dom';
import { app } from '../../../config/firebase';

import { exitIcon } from '../../../assets/icons';
import { formatDate, todayDate } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { v4 as uuidv4 } from 'uuid';

import titles from '../../../helpers/titles';

const AddPositionModal = ({ selectedTitle, open, onClose }) => {
  const [title, setTitle] = useState(selectedTitle);
  const [advance, setAdvance] = useState(false);
  const [positionForm, setPositionForm] = useState([]);
  const { setInformation } = useContext(MessagesContext);

  useEffect(() => {
    setTitle(selectedTitle);
  }, [selectedTitle]);

  const { currentUser } = useAuth();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!positionForm) {
      return alert('Must fill minimum one field 😡');
    }

    setInformation({
      error: '',
      message: '',
      haveError: false,
      haveMessage: false,
    });
    try {
      const id = uuidv4();
      await app
        .firestore()
        .collection('positions')
        .doc(`${id}`)
        .set({
          uid: currentUser.uid,
          id: id,
          position: positionForm.position
            ? positionForm.position
            : 'Unknown Position',
          name: positionForm.name ? positionForm.name : 'Unknown Company',
          city: positionForm.city ? positionForm.city : 'Unknown City',
          company_url: positionForm.company_url ? positionForm.company_url : '',
          position_url: positionForm.position_url
            ? positionForm.position_url
            : '',
          hr_mail: positionForm.hr_mail ? positionForm.hr_mail : '',
          hr_name: positionForm.hr_name ? positionForm.hr_name : '',
          status: positionForm.status ? positionForm.status : selectedTitle,
          description: positionForm.description ? positionForm.description : '',
          add_by: positionForm.add_by ? positionForm.add_by : '',
          date: positionForm.date ? positionForm.date : formatDate(todayDate()),
        });

      setInformation({
        message: `🎉 Success add new position - ${
          positionForm.position
            ? positionForm.position + ' 🎉'
            : 'Unknown Position 🎉'
        }`,
        haveMessage: true,
      });
      setPositionForm(null);
    } catch (error) {
      setInformation({
        error: error.message,
        hasError: true,
      });
      console.error(error);
    }
    setTimeout(() => {
      setInformation({
        error: '',
        message: '',
        haveError: false,
        haveMessage: false,
      });
    }, 2500);
    setAdvance(false);
    onClose();
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <S.BackDrop
        onClick={() => {
          onClose();
          setAdvance(false);
        }}
      />
      <S.ModalWrapper>
        <S.Header>
          <S.HeaderTitle>Add New Position</S.HeaderTitle>
          <S.ExitBtn
            onClick={() => {
              onClose();
              setAdvance(false);
            }}
          >
            <img src={exitIcon} alt='X' />
          </S.ExitBtn>
        </S.Header>
        <S.Body advance={advance}>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <S.InputLineOne>
              <S.HiddenLabel htmlFor='positionName'>
                Position Name
              </S.HiddenLabel>
              <S.Input
                type='text'
                id='positionName'
                name='positionName'
                placeholder='Position Name'
                onChange={(e) =>
                  setPositionForm({
                    ...positionForm,
                    position: e.target.value,
                  })
                }
              />
              <S.Date>
                <S.DateLabel htmlFor='addDate'>Application Date:</S.DateLabel>
                <S.InputDate
                  type='date'
                  defaultValue={`${todayDate()}`}
                  name='addDate'
                  id='addDate'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      date: e.target.value,
                    })
                  }
                />
              </S.Date>
            </S.InputLineOne>

            <S.InputLineTow>
              <S.HiddenLabel htmlFor='companyName'>Company Name</S.HiddenLabel>
              <S.Input
                type='text'
                id='companyName'
                name='companyName'
                placeholder='Company Name'
                onChange={(e) =>
                  setPositionForm({
                    ...positionForm,
                    name: e.target.value,
                  })
                }
              />
            </S.InputLineTow>

            <S.InputLineThree>
              <S.HiddenLabel htmlFor='description'>
                Position Description
              </S.HiddenLabel>
              <S.TextArea
                onChange={(e) =>
                  setPositionForm({
                    ...positionForm,
                    description: e.target.value,
                  })
                }
                placeholder='Position Description'
                name='description'
                id='description'
              ></S.TextArea>
            </S.InputLineThree>

            <S.InputLineFour advance={advance}>
              <S.HiddenLabel htmlFor='status'>Status</S.HiddenLabel>
              <S.Select
                name='status'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setPositionForm({
                    ...positionForm,
                    status: e.target.value,
                  });
                }}
              >
                {titles.map((title) => (
                  <option key={title.label} value={title.value}>
                    {title.label}
                  </option>
                ))}
              </S.Select>
            </S.InputLineFour>

            <S.InputAdvancedGroup advance={advance}>
              <S.InputAdvancedLineOne>
                <S.HiddenLabel htmlFor='positionUrl'>
                  Position Link
                </S.HiddenLabel>
                <S.InputUrl
                  name='positionUrl'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      position_url: e.target.value,
                    })
                  }
                  type='url'
                  placeholder='Position Link'
                />
              </S.InputAdvancedLineOne>
              <S.InputAdvancedLineTwo>
                <S.HiddenLabel htmlFor='hrName'>HR Name</S.HiddenLabel>
                <S.InputInsideGroup
                  name='hrName'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      hr_name: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='HR Name'
                />
                <S.HiddenLabel htmlFor='hrMail'>HR Mail</S.HiddenLabel>

                <S.InputInsideGroup
                  name='hrMail'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      hr_mail: e.target.value,
                    })
                  }
                  type='email'
                  placeholder='HR Mail'
                />
              </S.InputAdvancedLineTwo>
              <S.InputAdvancedLineThree>
                <S.HiddenLabel htmlFor='city'>City</S.HiddenLabel>

                <S.InputInsideGroup
                  name='city'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      city: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='City'
                />
                <S.HiddenLabel htmlFor='addBy'>Applied through</S.HiddenLabel>

                <S.InputInsideGroup
                  name='addBy'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      add_by: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Applied through'
                />
              </S.InputAdvancedLineThree>
            </S.InputAdvancedGroup>

            <S.InputLineFive>
              <S.SubmitButton type='button' onClick={handleOnSubmit}>
                Submit
              </S.SubmitButton>
              <S.CancelButton
                onClick={() => {
                  onClose();
                  setAdvance(false);
                }}
              >
                Cancel
              </S.CancelButton>
            </S.InputLineFive>
            <S.InputLineSix>
              <S.AdvanceBtn
                type='button'
                advance={advance}
                onClick={() => {
                  setAdvance(!advance);
                }}
              >
                Advanced
              </S.AdvanceBtn>
            </S.InputLineSix>
          </form>
        </S.Body>
      </S.ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default AddPositionModal;
