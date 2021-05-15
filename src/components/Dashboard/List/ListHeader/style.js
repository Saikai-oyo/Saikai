import styled from 'styled-components';
import { colorForTitle } from '../../../../helpers';

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
  background-color: ${({ title }) => colorForTitle(title)};
`;

export const HeaderTypography = styled.span`
  margin: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
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
`;
