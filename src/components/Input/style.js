import styled from 'styled-components';
import { upArrow, downArrow } from '../../assets/icons';

export const AuthInput = styled.input`
  padding: 1rem;
  width: 329.84px;
  height: 37.6px;
  background: #fff;
  border: 1px solid #a5add8;

  box-shadow: 0px 2.5px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
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

export const PositionsInput = styled.input`
  padding: 1rem;
  width: ${({ edit }) => (edit ? '183px' : '261px')};
  height: ${({ edit }) => (edit ? '21px' : '35px')};
  background: #fff;
  border: 1px solid #a5add8;
  font-weight: 300;
  line-height: 15px;
  color: #000000;
  border-radius: 4px;
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
`;

export const DescriptionInput = styled.textarea`
  padding: 1rem;
  width: ${({ edit }) => (edit ? '600px' : '541px')};
  height: ${({ edit }) => (edit ? '280px' : '114px')};
  background: #fff;
  border: 1px solid #a5add8;

  border-radius: 4px;
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
  line-height: 15px;
  color: #3f3f3f;
`;

export const LinkInput = styled.input`
  padding: 1rem;
  width: ${({ edit }) => (edit ? '383px' : '400px')};
  height: 35px;
  background: #fff;
  border: 1px solid #a5add8;

  border-radius: 4px;
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
  line-height: 15px;
  color: #3f3f3f;
`;

export const AdvanceInputs = styled.input`
  padding: 1rem;
  width: ${({ edit }) => (edit ? '115px' : '190px')};
  height: ${({ edit }) => (edit ? '21px' : '35px')};
  background: #fff;
  border: 1px solid #a5add8;

  border-radius: 4px;
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
  line-height: 15px;
  color: #3f3f3f;
`;

export const DateInput = styled.input`
  width: 137px;
  height: 30px;
  background: #fff;
  border: 1px solid #a5add8;
  border-radius: 4px;
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
  line-height: 15px;
  color: #3f3f3f;
`;

export const StatusInput = styled.select`
  width: ${({ edit }) => (edit ? '153px' : '190px')};
  height: 37px;
  padding: ${({ edit }) =>
    edit ? '.5rem .5rem .6rem .5rem' : '10px 0px 10px 10px'};
  background: #fff;
  border: 1px solid #a5add8;
  border-radius: 4px;
  outline: none;

  &:autofill,
  &:-webkit-autofill {
    background-color: #ffffff;
  }

  & > option {
    background: #ffffff;
    border: 1px solid #a5add8;
    border-radius: 4px;
  }

  /* Arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${upArrow});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 50%;

  &:focus {
    background-image: url(${downArrow});
    border: 1px solid #c282f4;
  }

  &:disabled {
    border: 1px solid #9e9e9e;
    color: #bdbdbd;
  }

  &:hover {
    border: 1px solid #c282f4;
  }

  font-weight: 300;
  line-height: 15px;
  color: #3f3f3f;
`;
