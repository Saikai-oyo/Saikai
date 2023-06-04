import styled from 'styled-components';
import { white, middleBlue, darkBlack } from '../../../styles/_color';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ResetPassContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 477px;
    height: 417px;
    background: ${white};
    border: 1px solid ${middleBlue};
    box-shadow: 0px 0px 70px 10px rgba(85, 85, 85, 0.25);
    border-radius: 8px;
    @media screen and (max-width: 500px) {
        & {
            background: none;
            border: none;
            box-shadow: none;
            border-radius: 0;
        }
    }
`;

export const Header = styled.h3`
    margin: 3.5rem auto 2.5rem auto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    color: ${darkBlack};

    @media screen and (max-width: 500px) {
        & {
            margin: 0 auto 8rem;
            font-size: 30px;
        }
    }
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
    align-items: center;
    margin-block-end: 35px;
    width: 20.5rem;
    height: 2rem;

    @media screen and (max-width: 500px) {
        & {
            height: 3rem;
        }
    }
`;

export const ResetPassword = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.5px;
    margin: 0px auto 3rem;
    width: 274.09px;
    height: 42.58px;
    background: linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${white};

    @media screen and (max-width: 500px) {
        & {
            margin: 0px auto 3rem;
        }
    }
`;

export const NeedAccount = styled.div`
    margin: 0px 165px 0px 175px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    & > a {
        color: ${darkBlack};
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        & {
            font-size: 1rem;
            margin: auto;
        }
    }
`;

export const HaveAccount = styled.div`
    margin: 20px auto 0px;
    width: max-content;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    & > a {
        color: ${darkBlack};
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        & {
            font-size: 1rem;
            margin: 20px auto 0;
        }
    }
`;
