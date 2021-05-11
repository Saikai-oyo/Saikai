import styled from 'styled-components';
import { searchIcon } from '../../../assets/icons';

export const SearchWrapper = styled.span`
  padding-right: 2rem;
`;

export const LabelSearchBar = styled.label`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
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
  padding-left: 3rem;

  background: #ffffff;
  border: 1px solid #c6c6c6;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 80px;

  &:focus {
    box-shadow: (0px 4px 9px rgba(0, 0, 0, 0.25));
    border: 1px solid #c282f4;
    outline: none;
  }

  &:disabled {
    border: 1px solid #9e9e9e;
    color: #bdbdbd;
  }

  &:hover {
    border: 1px solid #c282f4;
  }
`;
