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
  min-height: 45px;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #692020;
  border-radius: 0;
  background-color: ${({ show }) => show && '#ffbdbd'};
`;
