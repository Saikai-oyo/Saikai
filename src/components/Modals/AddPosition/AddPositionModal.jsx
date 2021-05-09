import React, { useState, useContext, useEffect } from 'react';
import {
  StatusInput,
  PositionsInput,
  DescriptionInput,
  LinkInput,
  AdvanceInputs,
} from '../../Input';

import DateInput from '../../Input/DateInput';
import * as S from './style';
import ReactDOM from 'react-dom';
import { app } from '../../../config/firebase';

import { exitIcon } from '../../../assets/icons';
import { formatDate, todayDate } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { v4 as uuidv4 } from 'uuid';

const AddPositionModal = ({ selectedTitle, open, onClose }) => {
  const [title, setTitle] = useState(selectedTitle);
  const [advance, setAdvance] = useState(false);
  const [positionForm, setPositionForm] = useState([]);
  console.log('~ positionForm', positionForm);
  const { setInformation } = useContext(MessagesContext);

  useEffect(() => {
    setTitle(selectedTitle);
  }, [selectedTitle]);

  const { currentUser } = useAuth();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setInformation({
      errorLine: null,
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
          city: positionForm.city ? positionForm.city : '',
          // company_url: positionForm.company_url ? positionForm.company_url : '',
          position_url: positionForm.position_url
            ? positionForm.position_url
            : '',
          hr_mail: positionForm.hr_mail ? positionForm.hr_mail : '',
          hr_name: positionForm.hr_name ? positionForm.hr_name : '',
          status: positionForm.status ? positionForm.status : selectedTitle,
          description: positionForm.description ? positionForm.description : '',
          appliedBy: positionForm.appliedBy ? positionForm.appliedBy : '',
          date: positionForm.date ? positionForm.date : formatDate(todayDate()),
          createdDate: new Date().getTime(),
        });

      setInformation({
        errorLine: [title, 'good'],
        message: 'Successfully Added',
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
    onClose();
    setAdvance(false);
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
              <PositionsInput
                tabIndex='1'
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
                <DateInput
                  tabIndex='4'
                  type='date'
                  value={`${todayDate()}`}
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
              <PositionsInput
                tabIndex='2'
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
              <DescriptionInput
                tabIndex='3'
                onChange={(e) =>
                  setPositionForm({
                    ...positionForm,
                    description: e.target.value,
                  })
                }
                placeholder='Position Description'
                name='description'
                id='description'
              ></DescriptionInput>
            </S.InputLineThree>

            <S.InputLineFour advance={advance}>
              <S.HiddenLabel htmlFor='status'>Status</S.HiddenLabel>
              <StatusInput
                tabIndex='5'
                name='status'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setPositionForm({
                    ...positionForm,
                    status: e.target.value,
                  });
                }}
              />
            </S.InputLineFour>

            <S.InputAdvancedGroup advance={advance}>
              <S.InputAdvancedLineOne>
                <S.HiddenLabel htmlFor='positionUrl'>
                  Position Link
                </S.HiddenLabel>
                <LinkInput
                  tabIndex='6'
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
                <AdvanceInputs
                  tabIndex='7'
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

                <AdvanceInputs
                  name='hrMail'
                  tabIndex='8'
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

                <AdvanceInputs
                  tabIndex='9'
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

                <AdvanceInputs
                  tabIndex='10'
                  name='addBy'
                  onChange={(e) =>
                    setPositionForm({
                      ...positionForm,
                      appliedBy: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Applied through'
                />
              </S.InputAdvancedLineThree>
            </S.InputAdvancedGroup>

            <S.InputLineFive>
              <S.SubmitButton type='submit' onClick={handleOnSubmit}>
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
