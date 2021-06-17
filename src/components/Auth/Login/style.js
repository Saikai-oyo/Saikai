import styled from 'styled-components';
import { googleIcon, facebookIcon } from '../../../assets/icons/';
import { white, middleBlue, darkBlack, facebookBlue, googleRed } from '../../../styles/_color';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 0 4% 3%;
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

export const Form = styled.form`
    min-width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.h3`
    margin: 54px auto 0px auto;
    width: max-content;
    height: 33.26px;
    font-weight: bold;
    font-size: 35px;
    line-height: 31px;
    color: ${darkBlack};
`;

export const Subtitle = styled.h4`
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: ${darkBlack};
    @media screen and (max-width: 500px) {
        & {
            display: block;
            width: 17rem;
            word-wrap: break-word;
            text-align: center;
            font-size: 1rem;
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
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 1rem;

    @media screen and (max-width: 500px) {
        & > input {
            margin-bottom: 1rem;
        }
    }
`;

export const LogIn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.5px;
    margin: 0 auto 14px;
    width: 17rem;
    height: 2.6rem;
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
            height: 4.6rem;
            font-size: 25px;
        }
    }
`;

export const LoginsWrappers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0px auto 10px;
    min-width: 17rem;

    @media screen and (max-width: 500px) {
        & {
            margin: 0px auto 27px;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const LoginWith = styled.button`
    width: 133px;
    height: 28px;
    background: ${({ login }) => (login === 'facebook' ? facebookBlue : googleRed)};
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    color: ${white};
    border: none;
    outline: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-inline: 10px;

    /* Arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
`;

export const ForgotPassword = styled.div`
    margin: 0 auto 10px;
    width: max-content;
    height: 15px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    & > a {
        color: ${darkBlack};
    }

    @media screen and (max-width: 500px) {
        & {
            margin: 0 auto 10px;
            font-size: 18px;
            line-height: 33px;
            width: max-content;
            height: 3rem;
        }
    }
`;

export const NeedAccount = styled.div`
    max-width: fit-content;
    margin: 0 auto 10px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    & > a {
        color: ${darkBlack};
        width: max-content;
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        & {
            margin: 0 auto 10px;
            font-size: 18px;
            width: max-content;
            line-height: 33px;
        }
    }
`;
