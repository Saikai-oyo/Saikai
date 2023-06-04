import styled from 'styled-components';
import { middleBlue, middleGrey, white } from '../../../../styles/_color';

// TODO: Description Position - Will move to another components later!!

export const DescriptionPositionWrapper = styled.div`
    ${({ descriptionTab }) =>
        descriptionTab ? 'display: flex;opacity: 1;flex-direction: column;' : 'display: none;opacity: 0;'}
    margin-block: 25px;

    @media screen and (max-width: 625px) {
        & {
            margin: 0;
        }
    }
`;
export const Label = styled.label`
    width: max-content;
    height: 13px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    color: ${middleGrey};
    margin: 0;
`;

export const Description = styled.div`
    width: 34.5rem;
    height: 16rem;
    background: ${white};
    border: 1px solid ${middleBlue};
    border-radius: 0px 0px 5px 5px;
    overflow-y: auto;
    padding: 0 0.5rem;
    @media screen and (max-width: 625px) {
        & {
            width: 100%;
            height: 70vh;
        }
    }
`;

// ?End description positions
