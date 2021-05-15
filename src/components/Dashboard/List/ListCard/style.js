import styled from 'styled-components';
import { colorForTitle } from '../../../../helpers';

export const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-bottom: 2.5px solid ${({ title }) => colorForTitle(title)};
  cursor: pointer;
  &:hover {
    background-color: ${({ title }) =>
      title === 'Applied'
        ? '#E8F2FC'
        : title === 'In Progress'
        ? '#F7EDF8'
        : title === 'Received Task'
        ? '#FCF1E8'
        : title === 'Contract'
        ? '#EEF7EE'
        : title === 'Denied'
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
