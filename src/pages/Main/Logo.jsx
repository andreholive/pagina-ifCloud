import React from 'react';
import logoImg from '../../assets/logo_ifcloud.png';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  width: 200px;
`;

const Logo = () => (
  <Container>
    <img src={logoImg} alt="ifCloud" style={{width: '100%'}} />
  </Container>
  
);

export default Logo;