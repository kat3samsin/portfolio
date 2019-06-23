import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-top: 2px solid #ffa7c4;
`;

const CopyrightContainer = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    margin: 0;
  }
  font-size: 1em;
  margin-left: auto;
  padding: 10px;
`;

const LinkStyled = styled.a`
  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    padding: 5px;
  }
  padding: 10px;
  font-size: 1em;
  font-weight: bold;
  text-decoration: none;
`;

const Footer = () => (
  <>
    <FooterStyled>
      <LinkStyled href="mailto:kat3samsin@gmail.com" target="_blank">
        Email
      </LinkStyled>
      <LinkStyled href="https://www.github.com/kat3samsin" target="_blank">
        GitHub
      </LinkStyled>
      <LinkStyled href="https://www.linkedin.com/in/ksamsin" target="_blank">
        LinkedIn
      </LinkStyled>
      <br />
      <CopyrightContainer>
        © {new Date().getFullYear()} Katrina Lou Samsin Tantay. Made in 🇵🇭
      </CopyrightContainer>
    </FooterStyled>
  </>
);

export default Footer;
