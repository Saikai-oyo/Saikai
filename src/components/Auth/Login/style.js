import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 479px;
  height: 538px;
  background: #ffffff;
  border: 1px solid #a5add8;
  box-shadow: 0px 0px 70px 10px rgba(85, 85, 85, 0.25);
  border-radius: 8px;
`;

export const Header = styled.h3`
  margin: 54px auto 0px auto;
  width: max-content;
  height: 33.26px;
  font-weight: bold;
  font-size: 35px;
  line-height: 31px;
  color: #353535;
`;
export const Subtitle = styled.h4`
  margin: 0px 74px 10px 74px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #353535;
`;

export const HiddenLabel = styled.label`
  display: none;
  visibility: hidden;
  opacity: 0;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 74px 71px 74px;
  width: 337px;
  height: 95px;
`;

export const LogIn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6.5px;
  margin: 0px 102px 14px 102px;
  width: 274.09px;
  height: 42.58px;
  background: linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);
  border-radius: 2.66111px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const ForgotPassword = styled.div`
  margin: 0px 182px 10px 194px;
  width: 104px;
  height: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  & > a {
    color: #353535;
  }
`;

export const NeedAccount = styled.div`
  margin: 0px 165px 57px 175px;
  width: 180px;
  height: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  & > a {
    color: #353535;
    font-weight: bold;
  }
`;
