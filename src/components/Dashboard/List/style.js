import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
`;

// export const ListMessages = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 25px;
//   background: ${({ message }) => (message === 'bad' ? '#fe4c4c' : '#6ACB73')};
//   border-radius: 0px 0px 5px 5px;
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 15px;
//   color: #ffffff;
//   text-align: center;
//   padding: 1px;
// `;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 260px;
  height: 35rem;
  background: #ffffff;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px -6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-y: auto;
`;
