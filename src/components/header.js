import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  align-content: flex-end;
`;

const LinkStyled = styled(Link)`
  padding: 10px;
`;

const Header = ({ siteTitle }) => (
  <>
  <HeaderStyled>
    <LinkStyled to="/about">
      About
    </LinkStyled>
    <LinkStyled to="/projects">
      Projects
    </LinkStyled>
    <LinkStyled to="/skills">
      Skills
    </LinkStyled>
    <LinkStyled to="/contact">
      Contact
    </LinkStyled>
  </HeaderStyled>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
