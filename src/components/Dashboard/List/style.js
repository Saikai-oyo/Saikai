import styled from 'styled-components';
import { colorForTitle } from '../../../helpers';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: inherit;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 260px;
    height: 35rem;
    background: #ffffff;
    border: 1px solid #c8c8c8;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -6px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export const ListHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    width: 100%;
    height: 39px;
    border-radius: 3px 3px 0px 0px;
    min-height: 39px;
    max-height: 39px;
    background-color: ${({ positionTitle }) => colorForTitle(positionTitle)};
`;

export const HeaderTypography = styled.span`
    margin: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
    cursor: context-menu;
`;

export const AddButton = styled.button`
    display: flex;
    background-color: transparent;
    border: 0px solid transparent;
`;

export const FilterButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    outline: none;
    position: relative;
`;

export const InnerList = styled.div`
    height: 100%;
    overflow-y: auto;
`;

export const ListBody = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 90%;
    max-height: 90%;
    position: relative;
`;

export const PositionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    text-align: center;
    border-bottom: 2.5px solid ${({ positionTitle }) => colorForTitle(positionTitle)};
    cursor: pointer;
    &:hover {
        background-color: ${({ positionTitle }) =>
            positionTitle === 'Applied'
                ? '#E8F2FC'
                : positionTitle === 'In Progress'
                ? '#F7EDF8'
                : positionTitle === 'Received Task'
                ? '#FCF1E8'
                : positionTitle === 'Contract'
                ? '#EEF7EE'
                : positionTitle === 'Denied'
                ? '#FAEAEA'
                : ''};
    }
`;

export const PositionHeader = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 3px 0px;
`;

export const PositionBody = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #6d6d6d;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 3px 0px;
`;

export const PositionFooter = styled.p`
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 3px 0px;
`;
