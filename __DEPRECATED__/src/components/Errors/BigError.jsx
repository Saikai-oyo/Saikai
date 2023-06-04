import React from 'react';
import styled from 'styled-components';
import { darkRed, veryLightRed } from '../../styles/_color';

export const SBigError = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-height: 45px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${darkRed};
    border-radius: 0;
    background-color: ${({ show }) => show && veryLightRed};
    margin: 10px 0;

    @media screen and (max-width: 500px) {
        & {
            margin: 1rem 20%;
        }
    }
`;
const BigError = ({ children, show }) => {
    return <SBigError show={show}>{children}</SBigError>;
};

export default BigError;
