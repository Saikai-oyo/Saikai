import styled from 'styled-components';
import { colorForTitle, colorHoverForTitle } from '../../../helpers';
import { black, doveGrey, lightGrey, white } from '../../../styles/_color';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: inherit;

    @media screen and (max-width: 850px) {
        & {
            flex-direction: column;
            height: auto;
            overflow-y: auto;
        }
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 16.5rem;
    height: ${({ collapse }) => (!collapse ? '35rem' : 'auto')};
    max-height: ${({ collapse }) => (!collapse ? 'unset' : '35rem')};
    background: ${white};
    border: 1px solid ${lightGrey};
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    & > div.show {
        height: 100%;
    }

    @media screen and (max-width: 1345px) {
        & {
            width: 14rem;
        }
    }
    @media screen and (max-width: 1160px) {
        & {
            width: 12rem;
        }
    }
    @media screen and (max-width: 991px) {
        & {
            width: 10.5rem;
        }
    }

    @media screen and (max-width: 850px) {
        & {
            margin-bottom: 3rem;
            width: 90vw;
        }

        & > div.show {
            overflow-y: auto;
        }
    }
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
    border-radius: 7px 7px 0 0;
    min-height: 39px;
    max-height: 39px;
    background-color: ${({ positionTitle }) => colorForTitle(positionTitle)};
`;

export const ListButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    ${({ padding }) => (padding === 'show' ? 'padding: 0 1rem;' : 'padding:0')};
`;

export const HeaderTypography = styled.span`
    margin: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: ${white};
    cursor: context-menu;

    @media screen and (max-width: 1160px) {
        & {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 991px) {
        & {
            font-size: smaller;
        }
    }
    @media screen and (max-width: 850px) {
        & {
            font-size: 20px;
        }
    }
`;

export const AddButton = styled.button`
    display: ${({ display }) => (display === 'show' ? 'flex' : 'none')};
    background-color: transparent;
    border: 0px solid transparent;
`;

export const FilterButton = styled.button`
    display: ${({ display }) => (display === 'show' ? 'flex' : 'none')};
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
        background-color: ${({ positionTitle }) => colorHoverForTitle(positionTitle)};
    }
`;

export const PositionHeader = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: ${black};
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 3px 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    @media screen and (max-width: 991px) {
        & {
            font-size: smaller;
        }
    }
    @media screen and (max-width: 850px) {
        & {
            font-size: 18px;
        }
    }
`;

export const PositionBody = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${doveGrey};
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 3px 0px;
    @media screen and (max-width: 991px) {
        & {
            font-size: smaller;
        }
    }

    @media screen and (max-width: 850px) {
        & {
            font-size: 16px;
        }
    }
`;

export const PositionFooter = styled.p`
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: ${black};
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 3px 0px;
    @media screen and (max-width: 991px) {
        & {
            font-size: smaller;
        }
    }
    @media screen and (max-width: 850px) {
        & {
            font-size: 14px;
        }
    }
`;
