import styled from 'styled-components';
import { ViewModalBG } from '../../../assets/images';
import { editIcon } from '../../../assets/icons';

export const BackDrop = styled.div`
  position: fixed;
  transition: all 1.3s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 635px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

export const ExitBtn = styled.button`
  margin: 26px 21px 0px 600px;
  width: 17px;
  height: 18px;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const Body = styled.div`
  background-image: url(${ViewModalBG});
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  height: 410px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7px 19px 21px 58px;
`;

export const DescriptionTab = styled.button`
  text-align: center;
  outline: none;
  width: 254px;
  height: 31px;
  background: ${({ descriptionTab }) =>
    descriptionTab
      ? 'linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);'
      : '#ffffff'};
  border: 1px solid #a5add8;
  border-radius: 5px 0px 0px 0px;
  font-weight: ${({ descriptionTab }) => (descriptionTab ? 'normal' : 'bold')};
  font-size: 18px;
  line-height: 23px;
  color: ${({ descriptionTab }) => (descriptionTab ? '#ffffff' : '#353535')};
`;

export const ViewTab = styled.button`
  text-align: center;
  outline: none;
  width: 266px;
  height: 31px;
  background: ${({ viewTab }) =>
    viewTab
      ? 'linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%)'
      : '#ffffff'};
  border: 1px solid #a5add8;
  border-radius: 0px 5px 0px 0px;
  font-weight: ${({ viewTab }) => (viewTab ? 'normal' : 'bold')};
  font-size: 18px;
  line-height: 23px;
  color: ${({ viewTab }) => (viewTab ? '#ffffff' : '#353535')};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 56px 0px 58px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  width: 190px;
  height: 33px;
  border: 1px solid #5f50e6;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  outline: none;
  color: #5f50e6;
  margin-right: 5px;
  background-color: transparent;
`;

export const EditBtn = styled.button`
  width: 100px;
  height: 20px;
  outline: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  border: none;
  background: none;
  text-decoration-line: underline;
  color: #5f50e6;

  /* Edit Icon */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  padding-right: 1rem;
  background-position-x: 100%;
  background-position-y: 50%;
  background-image: url(${editIcon});
  margin-top: 7px;
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  outline: none;
  width: 190px;
  height: 33px;
  background: #5f50e6;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;