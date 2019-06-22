import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    padding: 5px;
    margin: auto;
  }
  margin-right: auto;
  font-size: 1em;
`;

const LinkStyled = styled.a`
  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    padding: 5px;
  }
  margin-left: 10px;
  font-size: 1em;
  text-decoration: none;
`;

const Footer = () => (
  <>
    <FooterStyled>
      <Container>
        {new Date().getFullYear()} | Developed by Katrina Lou S. Tantay
      </Container>
      <LinkStyled href="mailto:kat3samsin@gmail.com" target="_blank">
        Email
      </LinkStyled>
      <LinkStyled href="https://www.github.com/kat3samsin" target="_blank">
        GitHub
      </LinkStyled>
      <LinkStyled href="https://www.linkedin.com/in/ksamsin" target="_blank">
        LinkedIn
      </LinkStyled>
    </FooterStyled>
  </>
);

export default Footer;
