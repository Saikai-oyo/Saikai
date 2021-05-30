import React from 'react';
import styled from 'styled-components';

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
    color: #692020;
    border-radius: 0;
    background-color: ${({ show }) => show && '#ffbdbd'};
`;
const BigError = ({ children, show }) => {
    return <SBigError show={show}>{children}</SBigError>;
};

export default BigError;
