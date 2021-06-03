import styled from 'styled-components';
import { ViewModalBG } from '../../../assets/images';
import { editIcon, openDeleteIcon, closeDeleteIcon } from '../../../assets/icons';

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
    width: ${({ edit }) => (edit ? '685px' : '635px')};
    height: ${({ edit }) => (edit ? '530px' : 'auto')};
    background: #ffffff;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index: 1000;
    transform: translate(-50%, -50%);
    background-image: url(${ViewModalBG});
    background-repeat: no-repeat;
    background-position: right bottom;

    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            border: 3px solid #a5add8;
            border-radius: 8px;
            height: 100%;
        }
    }
`;

export const ExitBtn = styled.button`
    margin: 16px 21px 0px ${({ edit }) => (edit ? '645px' : '606px')};
    width: 17px;
    height: 18px;
    outline: none;
    border: none;
    background-color: transparent;
    @media screen and (max-width: 625px) {
        & {
            display: none;
        }
    }
`;

export const Body = styled.div`
    width: 100%;
    height: 410px;

    @media screen and (max-width: 625px) {
        & {
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            padding: 1rem;
            max-height: unset;
        }
    }
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    margin: 7px 19px 21px 45px;
    @media screen and (max-width: 625px) {
        & {
            margin: 7px auto 21px auto;
        }
    }
`;

export const DescriptionTab = styled.button`
    text-align: center;
    outline: none;
    width: ${({ edit }) => (edit ? '300px' : '277px')};
    height: 31px;
    background: ${({ descriptionTab }) =>
        descriptionTab ? 'linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%);' : '#ffffff'};
    border: 1px solid #a5add8;
    border-radius: 5px 0px 0px 0px;
    font-weight: ${({ descriptionTab }) => (descriptionTab ? 'bold' : 'normal')};
    font-size: 18px;
    line-height: 23px;
    color: ${({ descriptionTab }) => (descriptionTab ? '#ffffff' : '#353535')};

    @media screen and (max-width: 625px) {
        & {
            width: 90vw;
            height: 75px;
            margin-right: 1rem;
            border-radius: 8px;
            font-size: 25px;
            line-height: 33px;
        }
    }
`;

export const ViewTab = styled.button`
    text-align: center;
    outline: none;
    width: ${({ edit }) => (edit ? '300px' : '277px')};
    height: 31px;
    background: ${({ viewTab }) => (viewTab ? 'linear-gradient(180deg, #7c6eff 21.13%, #ac00fd 277.46%)' : '#ffffff')};
    border: 1px solid #a5add8;
    border-radius: 0px 5px 0px 0px;
    font-weight: ${({ viewTab }) => (viewTab ? 'bold' : 'normal')};
    font-size: 18px;
    line-height: 23px;
    color: ${({ viewTab }) => (viewTab ? '#ffffff' : '#353535')};

    @media screen and (max-width: 625px) {
        & {
            height: 75px;
            width: 100%;
            border-radius: 8px;
            font-size: 25px;
            line-height: 33px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${({ edit }) => (edit ? '40px 245px 0px 45px' : '0px 56px 0px 45px')};

    @media screen and (max-width: 625px) {
        & {
            margin: 1rem 0;
            ${({ edit }) => (edit ? 'flex-direction: row;' : 'flex-direction: column-reverse')}
        }
    }
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    width: 183px;
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

    @media screen and (max-width: 625px) {
        & {
            height: 75px;
            width: 100%;
        }
    }
`;
export const IconsEditModeWrapper = styled.div`
    display: flex;
    width: 6rem;
    justify-content: space-between;

    @media screen and (max-width: 625px) {
        & {
            height: 3rem;
            width: 100%;
        }
    }
`;

export const IconsBtn = styled.button`
    width: 25px;
    height: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    /* Edit Icon */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
    background-image: ${({ icon }) => (icon === 'edit' ? `url(${editIcon})` : `url(${closeDeleteIcon})`)};

    &:hover {
        background-image: ${({ icon }) => (icon === 'edit' ? '' : `url(${openDeleteIcon})`)};
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    outline: none;
    width: 183px;
    height: 33px;
    background: #5f50e6;
    border-radius: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    border: none;

    @media screen and (max-width: 625px) {
        & {
            height: 75px;
            width: 100%;
        }
    }
`;
