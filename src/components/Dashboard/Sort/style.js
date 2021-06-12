import styled from 'styled-components';
import { colorHoverForTitle } from '../../../helpers';
import { black, middleBlue } from '../../../styles/_color';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    height: 190px;
    border: 1px solid ${middleBlue};
    border-radius: 8px;
    align-items: center;
    z-index: 9999;
    background-color: white;
    position: absolute;
    top: 1rem;
    left: 0.5rem;
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
        background-color: ${({ positionTitle }) => colorHoverForTitle(positionTitle)};
    }
`;
