import styled from 'styled-components';
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
  width: 240px;
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
  padding: 10px 20px;
  width: 100%;
  height: 39px;
  border-radius: 4px;
  background-color: ${({ title }) =>
    title === 'Applied'
      ? '#4c94e5'
      : title === 'In Progress'
      ? '#c685cd'
      : title === 'Received Task'
      ? '#E78C49'
      : title === 'Contract'
      ? '#63b767'
      : title === 'Denied'
      ? '#b92c2c'
      : ''};
`;

export const HeaderTypography = styled.div`
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

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-y: auto;
`;

export const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-bottom: 2.5px solid
    ${({ title }) =>
      title === 'Applied'
        ? '#4c94e5'
        : title === 'In Progress'
        ? '#c685cd'
        : title === 'Received Task'
        ? '#E78C49'
        : title === 'Contract'
        ? '#63b767'
        : title === 'Denied'
        ? '#b92c2c'
        : ''};
  cursor: pointer;
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
