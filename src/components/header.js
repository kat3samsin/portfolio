import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import DarkModeToggle from './darkModeToggle';

const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
`;

const LinkStyled = styled(Link)`
  font-size: 1em;
  padding: 10px;
  &:hover {
    border-bottom: none !important;
  }
`;

const ToggleContainer = styled.div`
  padding: 10px 10px;
  margin-left: auto;
`;

const Header = ({ siteTitle }) => (
  <>
    <HeaderStyled>
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
