import styled from 'styled-components';
import { addPositionBG } from '../../../assets/images';
import { upArrow, downArrow } from '../../../assets/icons';

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
  width: 621px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 621px;
  height: 55px;
  background: linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);
`;

export const HeaderTitle = styled.span`
  width: 214px;
  height: 31px;
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
  color: #ffffff;
`;

export const ExitBtn = styled.button`
  width: 17px;
  height: 18px;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const Body = styled.div`
  background-image: url(${addPositionBG});
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  max-height: ${({ advance }) => (advance ? 'auto' : '453px')};
  transition: all 0.3s;
`;

export const HiddenLabel = styled.label`
  display: none;
  visibility: hidden;
  opacity: 0;
`;

export const InputLineOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 31px 50px 21px 40px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px;
  width: min-content;
  height: 30px;
`;

export const DateLabel = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  width: 110px;
  margin: 0px 5px;
  white-space: nowrap;
`;

export const InputDate = styled.input`
  width: 8rem;
  height: 30px;
  border: 1px solid #a5add8;
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 2px solid #4c94e5;
  }
`;

export const InputLineTow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 320px 20px 40px;
`;

export const InputLineThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px 20px 40px;
`;

export const InputLineFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 391px ${({ advance }) => (advance ? '31px' : '58px')} 40px;
`;

export const InputLineFive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 185px 0px 40px;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  width: 190px;
  height: 33px;
  border: 1px solid #5f50e6;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  outline: none;
  color: #5f50e6;
  margin-right: 5px;
  background-color: transparent;
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
  border: 1px solid #5f50e6;
`;

export const InputLineSix = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 26px 26px 495px;
`;

export const AdvanceBtn = styled.button`
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
  /* Arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  padding-right: 1rem;
  background-position-x: 100%;
  background-position-y: 50%;
  ${({ advance }) =>
    advance
      ? `background-image: url(${downArrow});`
      : `background-image: url(${upArrow});`};
`;

export const InputAdvancedGroup = styled.div`
  ${({ advance }) =>
    advance
      ? `display: flex;flex-direction: column;padding: 0px 180px 63px 40px;visibility:visible; opacity:1;`
      : `display:none; opacity:0; visibility:hidden;`}
  transition: all 7s;
`;

export const InputAdvancedLineOne = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputAdvancedLineTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 29px 0px 29px 0px;
`;

export const InputAdvancedLineThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
