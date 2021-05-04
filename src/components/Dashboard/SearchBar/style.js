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
    top: 9px;
    bottom: 9px;
    width: 20px;
    background: url(${searchIcon});
    background-repeat: no-repeat;
  }
`;

export const SearchBar = styled.input`
  width: 322px;
  height: 32px;
  padding-left: 2rem;

  background: #ffffff;
  border: 1px solid #c6c6c6;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  &:focus {
    border: 2px solid #4c94e5;
    outline: none;
  }
`;
