import React from 'react';
import styled from 'styled-components';

const SFooter = styled.div`
  margin: auto;
  width: max-content;
  height: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  &,
  & > a {
    color: #353535;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      Copyright: © 2021{' '}
      <a href='https://github.com/eidan66/Saikai/'> Saikai.</a>
      All Rights Reserved.
    </SFooter>
  );
};

export default Footer;
