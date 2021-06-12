import styled from 'styled-components';
import { middleRed, white } from '../../styles/_color';

export const ListMessages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25px;
    background: ${({ message }) => (message === 'bad' ? middleRed : 'veryLightGreen')};
    border-radius: 0px 0px 5px 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 15px;
    color: ${white};
    text-align: center;
    padding: 1px;
`;
