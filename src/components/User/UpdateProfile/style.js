import styled from 'styled-components';
import { upArrow } from '../../../assets/icons';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UpdatePassContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 474.97px;
    height: 504px;
    background: #ffffff;
    border: 1px solid #a5add8;
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

export const GoBack = styled.div`
    margin: 25px 430px 0px 25px;
    width: 23.39px;
    height: 19.79px;

    /* Arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${upArrow});
    background-repeat: no-repeat;
    transform: rotate(90deg);
    cursor: pointer;

    @media screen and (max-width: 500px) {
        & {
            display: none;
        }
    }
`;

export const Header = styled.h3`
    margin: 25px 146px 37px 147px;
    width: 100%;
    height: 32.98px;
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
    margin: 0px 74px 27px 74px;
    width: 337px;
    height: 105px;

    @media screen and (max-width: 500px) {
        & {
            align-items: center;
            height: 7.5rem;
            margin: 0px 91px 27px 91px;
            width: auto;
        }
    }
`;

export const Update = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.5px;
    margin: 0px 102px 14px 102px;
    width: 17rem;
    height: 2.5rem;
    background: linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);
    border-radius: 4px;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    @media screen and (max-width: 500px) {
        & {
            margin: 0px 91px 14px 91px;
            width: 18rem;
            height: 3rem;
            font-size: 20px;
            line-height: 39px;
        }
    }
`;

export const Cancel = styled.button`
    margin: 0px 165px 57px 152px;
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
        color: #353535;
        font-weight: bold;
    }

    @media screen and (max-width: 500px) {
        & {
            margin: 0px 91px 14px 91px;
            width: 18rem;
            height: 3rem;
            border: 1px solid #a5add8;
            box-sizing: border-box;
            border-radius: 4px;

            font-weight: normal;
            font-size: 20px;
            line-height: 39px;
            color: #353535;
        }
    }
`;

export const FooterWrapper = styled.div`
    margin: 0px 90px 0px 155px;
`;
