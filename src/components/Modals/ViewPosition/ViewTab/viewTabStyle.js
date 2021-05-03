import styled from 'styled-components';

export const Label = styled.label`
  width: max-content;
  height: 13px;
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  color: #9e9e9e;
  margin: 0;
`;

export const ViewPositionWrapper = styled.div`
  ${({ viewTab }) =>
    viewTab
      ? 'display: flex;opacity: 1;flex-direction: column;'
      : 'display: none;opacity: 0;'}
  margin: 0px 58px;
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
  margin: 0px 0px 21px 281px;
`;
export const DateLabel = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  width: 101px;
  margin: 0px 5px;
  white-space: nowrap;
  color: #9e9e9e;
`;

export const Date = styled.span`
  width: 6rem;
  height: 30px;
  border: 1px solid #a5add8;
  border-radius: 4px;
  outline: none;
`;
export const ViewLineOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 481px;
  height: 31px;
  margin: 0px 106px 28px 0px;
`;

export const PositionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PositionText = styled.span`
  width: max-content;
  height: 18px;
  font-weight: 300;
  line-height: 18px;
  color: #3f3f3f;
`;
export const UnderLineStatus = styled.div`
  width: ${({ title }) =>
    title === 'Applied'
      ? '48px'
      : title === 'In Progress'
      ? '65px'
      : title === 'Received Task'
      ? '81px'
      : title === 'Contract'
      ? '51px'
      : title === 'Denied'
      ? '44px'
      : ''};
  height: 0px;

  border: 2.5px solid
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
      : ''}; ;
`;

export const ViewLineTwo = styled.div`
  display: flex;
  flex-direction: row;
  height: 31px;
  margin: 0px 380px 23px 0px;

  & > div > span > a {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 20rem;
  }
`;

export const ViewLineThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 369px;
  height: 85px;
  margin: 0px 159px 44px 0px;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 13px;
`;
