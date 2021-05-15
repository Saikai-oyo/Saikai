import styled from 'styled-components';

export const ListMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  background: ${({ message }) => (message === 'bad' ? '#fe4c4c' : '#6ACB73')};
  border-radius: 0px 0px 5px 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;
  padding: 1px;
`;
