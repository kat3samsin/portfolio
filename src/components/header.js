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
`;

const AnchorStyled = styled.a`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
`;

const ToggleContainer = styled.div`
  margin-left: auto;
`;

const Header = () => (
  <>
    <HeaderStyled data-aos="flip-up">
      <LinkStyled to="/#about">About</LinkStyled>
      <LinkStyled to="/#work">Work</LinkStyled>
      <LinkStyled to="/#skills">Skills</LinkStyled>
      {/* <LinkStyled to="/#projects">Projects</LinkStyled> */}
      <AnchorStyled
        href="https://drive.google.com/file/d/1aoWZc8HJ6HovtujThelY7qggiRK5GNrE/view?usp=sharing"
        target="_blank"
      >
        Resume
      </AnchorStyled>
      <ToggleContainer>
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
