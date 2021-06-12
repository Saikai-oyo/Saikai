import styled from 'styled-components';
import { middleBlue, black, veryLightGrey } from '../../styles/_color';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    height: auto;
    border: 1px solid ${middleBlue};
    border-radius: 8px;
    align-items: center;
    z-index: 9999;
    background-color: white;
    position: absolute;
    padding-bottom: 5px;
    right: 0;
`;
export const title = styled.div`
    height: 21px;
    padding: 3px 0px;
    margin: 2px 0px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: ${black};
`;

export const item = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    height: 18px;
    font-family: Assistant;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${black};

    &:hover {
        background-color: ${veryLightGrey};
    }
`;
