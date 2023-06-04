import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { upArrow } from '../../../assets/icons';
import { darkBlack, middleBlue, white, darkGrey } from '../../../styles/_color';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 482px;
    height: 393.63px;
    background: ${white};
    border: 1px solid ${middleBlue};
    box-shadow: 0px 0px 70px 10px rgba(85, 85, 85, 0.25);
    border-radius: 8px;
    @media screen and (max-width: 500px) {
        & {
            background: none;
            border: none;
            box-shadow: none;
            border-radius: none;
        }
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 161px 20px 161px;
    width: max-content;
    height: 15%;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        & {
            height: 18%;
            margin: 0px auto 3rem auto;
        }

        &,
        span {
            font-size: 20px;
        }
    }
`;

export const EmailText = styled.span`
    width: 10rem;
    height: 1rem;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${darkGrey};
`;

export const Update = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.5px;
    margin: 2rem auto;
    width: 17rem;
    height: 2.5rem;
    background: linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);
    border-radius: 4px;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    & > a {
        color: ${white};
        text-decoration: none;
    }

    @media screen and (max-width: 500px) {
        & {
            margin: 2rem auto;
            width: 18rem;
            height: 3rem;
            font-size: 20px;
            line-height: 39px;
        }
    }
`;

export const Logout = styled.button`
    margin: 0 auto;
    width: 180px;
    height: 1rem;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    background: none;
    & > a {
        color: ${darkBlack};
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        & {
            margin: 0px 91px 14px 91px;
            width: 18rem;
            height: 3rem;
            font-weight: bold;
            font-size: 20px;
            line-height: 39px;
            color: ${darkBlack};
        }
    }
`;

export const FooterWrapper = styled.div`
    margin: 0px 90px 0px 155px;
`;
