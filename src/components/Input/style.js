import styled from 'styled-components';
import { upArrow, downArrow } from '../../assets/icons';
import {
    black,
    middleBlue,
    middleGrey,
    middlePurple,
    middleRed,
    white,
    disabledGrey,
    darkGrey,
    veryDarkGrey,
} from '../../styles/_color';

export const AuthInput = styled.input`
    padding: 1rem;
    width: 329.84px;
    height: 37.6px;

    background: ${white};
    border: 1px solid ${middleBlue};

    box-shadow: 0px 2.5px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${darkGrey};

    @media screen and (max-width: 500px) {
        & {
            width: 17rem;
            height: 3rem;
        }
    }
`;

export const PositionsInput = styled.input`
    padding: 1rem;
    width: ${({ edit }) => (edit ? '183px' : '250px')};
    height: ${({ edit }) => (edit ? '21px' : '35px')};
    background: ${white};
    border: 1px solid ${middleBlue};
    font-weight: 300;
    line-height: 15px;
    color: ${black};
    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 3rem;
        }
        &::placeholder {
            color: transparent;
        }
    }
`;

export const DescriptionInput = styled.textarea`
    padding: 1rem;
    width: ${({ edit }) => (edit ? '600px' : '541px')};
    height: ${({ edit }) => (edit ? '280px' : '114px')};
    background: ${white};
    border: 1px solid ${middleBlue};

    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    font-weight: 300;
    line-height: 15px;
    color: ${veryDarkGrey};

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 70vh;
        }
        &::placeholder {
            color: transparent;
        }
    }
`;

export const LinkInput = styled.input`
    padding: 1rem;
    width: ${({ edit }) => (edit ? '383px' : '400px')};
    height: 35px;
    background: ${white};
    border: 1px solid ${middleBlue};

    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    font-weight: 300;
    line-height: 15px;
    color: ${veryDarkGrey};

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 3rem;
        }
        &::placeholder {
            color: transparent;
        }
    }
`;

export const AdvanceInputs = styled.input`
    padding: 1rem;
    width: ${({ edit }) => (edit ? '115px' : '190px')};
    height: ${({ edit }) => (edit ? '21px' : '35px')};
    background: ${white};
    border: 1px solid ${middleBlue};

    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    font-weight: 300;
    line-height: 15px;
    color: ${veryDarkGrey};

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 3rem;
        }
        &::placeholder {
            color: transparent;
        }
    }
`;

export const DateInput = styled.input`
    width: 137px;
    height: 30px;
    background: ${white};
    border: 1px solid ${middleBlue};
    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    &:focus {
        filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
    }

    &:invalid {
        border: 1px solid ${middleRed};
        color: ${disabledGrey};
    }
    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    font-weight: 300;
    line-height: 15px;
    color: ${veryDarkGrey};
`;

export const StatusInput = styled.select`
    width: ${({ edit }) => (edit ? '153px' : '190px')};
    height: 3rem;
    padding-block: ${({ edit }) => (edit ? '.5rem .6rem' : '10px')};
    padding-inline: ${({ edit }) => (edit ? '.5rem .6rem' : '10px 0px')};
    background: ${white};
    border: 1px solid ${middleBlue};
    border-radius: 4px;
    outline: none;

    &:autofill,
    &:-webkit-autofill {
        background-color: ${white};
    }

    & > option {
        background: ${white};
        border: 1px solid ${middleBlue};
        border-radius: 4px;
    }

    /* Arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${upArrow});
    background-repeat: no-repeat;
    background-position-x: ${({ selectedLang }) => (selectedLang === 'he' ? '10%' : '90%')};
    background-position-y: 50%;

    font-weight: 300;
    line-height: 15px;
    color: ${veryDarkGrey};

    &:focus {
        background-image: url(${downArrow});
        border: 1px solid ${middlePurple};
    }

    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 3rem;
        }
    }
`;
