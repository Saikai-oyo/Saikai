import styled from 'styled-components';

export const SmallError = styled.small`
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  color: #fe4c4c;
`;

export const BigError = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 45px;
  margin: 0.5rem 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 9px;
  text-align: center;
  color: #692020;

  background-color: ${({ show }) => show && '#ffbdbd'};
`;
