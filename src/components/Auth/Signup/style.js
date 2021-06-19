import styled from 'styled-components';
import { darkBlack, facebookBlue, googleRed, middleBlue, white } from '../../../styles/_color';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 470px;
    background: ${white};
    border: 1px solid ${middleBlue};
    box-shadow: 0px 0px 70px 10px rgba(85, 85, 85, 0.25);
    border-radius: 8px;
    align-items: center;
    padding: 30px;

    @media screen and (max-width: 500px) {
        & {
            width: 100%;
            padding: 0;
            padding-inline: 30px;
            background: none;
            border: none;
            box-shadow: none;
            border-radius: 0;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 100%;
`;

export const Header = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    color: ${darkBlack};
`;

export const Subtitle = styled.h4`
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: ${darkBlack};
    @media screen and (max-width: 500px) {
        & {
            display: block;
            word-wrap: break-word;
            text-align: center;
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
    gap: 6px;
    flex-direction: column;
    margin: 5px auto;
    @media screen and (max-width: 500px) {
        & {
            width: max-content;
        }
    }
`;

export const Instructions = styled.div`
    @media screen and (max-width: 500px) {
        & {
            width: max-content;
        }
    }
`;

export const TextWrapper = styled.p`
    font-size: 12px;
    width: max-content;

    @media screen and (max-width: 500px) {
        font-size: 10px;
    }
`;

export const SignUp = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.5px;
    margin: 0px auto 14px;
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
`;

export const LoginsWrappers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 102px;
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
`;

export const HaveAccount = styled.div`
    max-width: fit-content;
    margin: 0 auto 10px;
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
            width: max-content;
            margin: 10px auto 0px auto;
        }
    }
`;
