import styled from 'styled-components';

// TODO: Description Position - Will move to another components later!!

export const DescriptionPositionWrapper = styled.div`
  ${({ descriptionTab }) =>
    descriptionTab
      ? 'display: flex;opacity: 1;flex-direction: column;'
      : 'display: none;opacity: 0;'}
  margin: 0px 58px 20px 45px;
`;
export const Label = styled.label`
  width: max-content;
  height: 13px;
  font-weight: 300;
  font-size: 14px;
  line-height: 13px;
  color: #9e9e9e;
  margin: 0;
`;

export const Description = styled.div`
  width: 553px;
  height: 255px;
  background: #ffffff;
  border: 1px solid #a5add8;
  border-radius: 0px 0px 5px 5px;
  overflow-y: auto;
  padding: 0 0.5rem;
`;

// ?End description positions
