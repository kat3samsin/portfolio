import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import DarkModeButton from './darkModeButton';

const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const LinkStyled = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const AnchorStyled = styled.a`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ToggleContainer = styled.div`
  margin-left: auto;
`;

const Header = () => (
  <>
    <HeaderStyled>
      <LinkStyled data-aos="zoom-in-right" to="/#about">
        About
      </LinkStyled>
      <LinkStyled data-aos="zoom-in-right" to="/#work">
        Work
      </LinkStyled>
      <LinkStyled data-aos="zoom-in-right" to="/#skills">
        Skills
      </LinkStyled>
      {/* <LinkStyled to="/#projects">Projects</LinkStyled> */}
      <AnchorStyled
        data-aos="zoom-in-right"
        href="https://drive.google.com/file/d/1aoWZc8HJ6HovtujThelY7qggiRK5GNrE/view?usp=sharing"
        target="_blank"
      >
        Resume
      </AnchorStyled>
      <ToggleContainer data-aos="zoom-in-left">
        <DarkModeButton />
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
