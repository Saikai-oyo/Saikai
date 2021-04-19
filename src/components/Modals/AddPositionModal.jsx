import React from 'react';
import * as S from './style';
import ReactDOM from 'react-dom';
import { exitIcon } from '../../assets/icons';
import { todayDate } from '../../helpers';

const AddPositionModal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <S.BackDrop onClick={onClose} />
      <S.ModalWrapper>
        <S.Header>
          <S.HeaderTitle>Add New Position</S.HeaderTitle>
          <S.ExitBtn onClick={onClose}>
            <img src={exitIcon} alt='X' />
          </S.ExitBtn>
        </S.Header>
        <S.Body>
          <S.InputLineOne>
            <S.Input
              type='text'
              id='positionName'
              placeholder='Position Name'
            />
            <S.Date>
              <S.DateLabel htmlFor='addDate'>Position Date:</S.DateLabel>
              <S.InputDate
                type='date'
                defaultValue={`${todayDate()}`}
                name='addDate'
                id='addDate'
              />
            </S.Date>
          </S.InputLineOne>

          <S.InputLineTow>
            <S.Input type='text' id='companyName' placeholder='Company Name' />
          </S.InputLineTow>

          <S.InputLineThree>
            <S.TextArea placeholder='Position Description'></S.TextArea>
          </S.InputLineThree>

          <S.InputLineFour>
            <S.Select>
              <option value='' selected disabled hidden>
                Status
              </option>
              <option value='Applied'>Applied</option>
              <option value='In Progress'>In Progress</option>
              <option value='Received Task'>Received Task</option>
              <option value='Contract'>Contract</option>
              <option value='Denied'>Denied</option>
            </S.Select>
          </S.InputLineFour>

          <S.InputLineFive>
            <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>
            <S.SubmitButton>Submit</S.SubmitButton>
          </S.InputLineFive>

          <S.InputLineSix>
            <S.AdvanceBtn>{'Advanced >>'}</S.AdvanceBtn>
          </S.InputLineSix>
        </S.Body>
      </S.ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default AddPositionModal;
