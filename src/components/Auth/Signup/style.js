import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 680px;
  background: #ffffff;
  border: 1px solid #a5add8;
  box-shadow: 0px 0px 70px 10px rgba(85, 85, 85, 0.25);
  border-radius: 8px;
`;

export const Header = styled.h3`
  margin: 61px 186px 43px 186px;
  width: 100px;
  height: 33px;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
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
  height: 295.71px;
  margin: 0px 74px 27px 74px;
  width: 337px;
`;

export const SignUp = styled.button`
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

export const HaveAccount = styled.div`
  margin: 10px 145px 78px 160px;
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

export const FooterWrapper = styled.div`
  margin: 0px 130px 60px 150px;
`;
