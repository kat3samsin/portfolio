import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import DarkModeToggle from './darkModeToggle';

const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const LinkStyled = styled(Link)`
  @media only screen and (max-width: 600px) {
    font-size: 0.7em;
    padding: 5px;
  }
  font-size: 1em;
  margin: 10px;
  text-decoration: none;
`;

const ToggleContainer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
  padding: 10px 10px;
  margin-left: auto;
`;

const Header = () => (
  <>
    <HeaderStyled data-aos="flip-up">
      <LinkStyled to="/#home">Home</LinkStyled>
      <LinkStyled to="/#about">About</LinkStyled>
      <LinkStyled to="/#skills">Skills</LinkStyled>
      <LinkStyled to="/#projects">Projects</LinkStyled>
      <LinkStyled to="/#contact">Contact</LinkStyled>
      <ToggleContainer>
        <DarkModeToggle />
      </ToggleContainer>
    </HeaderStyled>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
