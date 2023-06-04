import styled from 'styled-components';
import { searchIcon } from '../../../assets/icons';
import { middleBlue, middleGrey, middlePurple, white, disabledGrey } from '../../../styles/_color';

export const SearchWrapper = styled.span``;

export const LabelSearchBar = styled.label`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 8px;
        top: 7px;
        bottom: 9px;
        width: 30px;
        background: url(${searchIcon});
        background-repeat: no-repeat;
    }
`;

export const SearchBar = styled.input`
    width: 415px;
    height: 45px;
    padding-inline-start: 3rem;

    background: ${white};
    border: 1px solid ${middleBlue};
    box-shadow: 0px 2.5px 6px rgba(0, 0, 0, 0.25);
    border-radius: 80px;

    &:focus {
        box-shadow: (0px 4px 9px rgba(0, 0, 0, 0.25));
        border: 1px solid ${middlePurple};
        outline: none;
    }

    &:disabled {
        border: 1px solid ${middleGrey};
        color: ${disabledGrey};
    }

    &:hover {
        border: 1px solid ${middlePurple};
    }
`;
