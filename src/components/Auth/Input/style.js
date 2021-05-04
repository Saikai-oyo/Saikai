import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  width: 329.84px;
  height: 37.6px;
  background: #fff;
  border: 1px solid #a5add8;

  box-shadow: 0px 2.5px 6px rgba(0, 0, 0, 0.25);
  border-radius: 2.63874px;
  outline: none;

  &:autofill,
  &:-webkit-autofill {
    background-color: #ffffff;
  }

  &:focus {
    filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
    border: 1px solid #c282f4;
  }

  &:invalid {
    border: 1px solid #fe4c4c;
    color: #bdbdbd;
  }
  &:disabled {
    border: 1px solid #9e9e9e;
    color: #bdbdbd;
  }

  &:hover {
    border: 1px solid #c282f4;
  }

  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #525252;
`;
