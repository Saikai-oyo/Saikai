import styled from 'styled-components';
import { blue, purple, orange, green, red, middleGrey, middleBlue, veryDarkGrey } from '../../../../styles/_color';

export const Label = styled.label`
    width: max-content;
    height: 13px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    color: ${middleGrey};
    margin: 0;

    @media screen and (max-width: 625px) {
        & {
            font-weight: 600;
            color: black;
        }
    }
`;

export const ViewPositionWrapper = styled.div`
    ${({ viewTab }) => (viewTab ? 'display: flex;opacity: 1;flex-direction: column;' : 'display: none;opacity: 0;')}
    margin: 0px 45px;
    @media screen and (max-width: 625px) {
        & {
            flex-direction: column;
            font-weight: 600;
            margin: 0;
            margin-bottom: 1rem;
        }
    }
`;

export const WrapperDate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px;
    width: max-content;
    height: 25px;
    margin: ${({ edit }) => (edit ? '0px 0px 21px 342px' : '0px 0px 21px 336px')};

    @media screen and (max-width: 625px) {
        & {
            margin: 0px auto 21px auto;
        }
    }
`;
export const DateLabel = styled.label`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    width: 110px;
    margin: 0px 5px;
    white-space: nowrap;
    color: ${middleGrey};
`;

export const Date = styled.span`
    width: 6rem;
    height: 30px;
    border: 1px solid ${middleBlue};
    border-radius: 4px;
    outline: none;
`;
export const ViewLineOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${({ edit }) => (edit ? 'auto' : '481px')};
    height: 31px;
    margin: 0px ${({ edit }) => (edit ? '-3px' : '106px')} 28px 0px;

    @media screen and (max-width: 625px) {
        & {
            flex-direction: column;
            font-weight: 600;
            height: 100%;
            margin: 0;
        }
    }
`;

export const PositionGroup = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 625px) {
        & {
            margin-bottom: 3rem;
        }
    }
`;

export const PositionText = styled.span`
    width: max-content;
    height: 18px;
    font-weight: 300;
    line-height: 18px;
    color: ${veryDarkGrey};
`;
export const UnderLineStatus = styled.div`
    width: ${({ title }) =>
        title === 'Applied'
            ? '51px'
            : title === 'In Progress'
            ? '73px'
            : title === 'Received Task'
            ? '91px'
            : title === 'Contract'
            ? '57px'
            : title === 'Denied'
            ? '47px'
            : ''};
    height: 0px;

    border: 2.5px solid
        ${({ title }) =>
            title === 'Applied'
                ? blue
                : title === 'In Progress'
                ? purple
                : title === 'Received Task'
                ? orange
                : title === 'Contract'
                ? green
                : title === 'Denied'
                ? red
                : ''};
    background-color: ${({ title }) =>
        title === 'Applied'
            ? blue
            : title === 'In Progress'
            ? purple
            : title === 'Received Task'
            ? orange
            : title === 'Contract'
            ? green
            : title === 'Denied'
            ? red
            : ''}; ;
`;

export const ViewLineTwo = styled.div`
    display: flex;
    flex-direction: row;
    height: 31px;
    margin: ${({ edit }) => (edit ? '0px 380px 28px 0px' : '0px 380px 23px 0px')};

    & > div > span > a {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        width: 20rem;
    }

    @media screen and (max-width: 625px) {
        & {
            flex-direction: column;
            font-weight: 600;
            height: 100%;
            margin: 0;
        }
    }
`;

export const ViewLineThree = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 369px;
    height: 85px;
    margin: ${({ edit }) => (edit ? '0 159px 44px 0px' : '0px 159px 44px 0px')};

    @media screen and (max-width: 625px) {
        & {
            flex-direction: column;
            font-weight: 600;
            margin: 0;
            height: 100%;
            flex-direction: column;
        }
    }
`;

export const GroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: ${({ edit }) => (edit ? '1rem' : '13px')};
    ${({ edit }) => edit && 'height: 6.5rem;'}

    @media screen and (max-width: 625px) {
        & {
            font-weight: 600;
            height: 100%;
            margin: 0;
        }
    }
`;
