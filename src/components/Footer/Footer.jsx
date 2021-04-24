import React from 'react';
import styled from 'styled-components';

const SFooter = styled.div`
  width: 209px;
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
      <a href='https://www.linkedin.com/in/idanlevian/'> Idan Levian.</a>
    </SFooter>
  );
};

export default Footer;
