import React from 'react';
import styled from 'styled-components';
import { Divider, Flag, Icon, Segment } from 'semantic-ui-react';

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
  font-size: 1.2em;
  margin-left: auto;
  padding: 10px;
  overflow: hidden;
`;

const LinkStyled = styled.a`
  @media only screen and (max-width: 600px) {
    font-size: 1em;
    padding: 5px;
  }
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
`;

const Footer = () => (
  <>
    <FooterStyled />
    <LinkStyled href="mailto:katrinatantay@gmail.com" target="_blank">
      <Icon link name="mail" />
    </LinkStyled>
    <LinkStyled href="https://www.github.com/kat3samsin" target="_blank">
      <Icon link name="github" />
    </LinkStyled>
    <LinkStyled
      href="https://www.linkedin.com/in/katrinatantay"
      target="_blank"
    >
      <Icon link name="linkedin" />
    </LinkStyled>
    <CopyrightContainer>
      © {new Date().getFullYear()} Katrina Tantay |&nbsp;
      <Flag name="us" />
      <Flag name="ph" />
    </CopyrightContainer>
  </>
);

export default Footer;
