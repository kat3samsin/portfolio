import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
`;

const LinkStyled = styled(Link)`
  padding: 5px;
`;

const Header = ({ siteTitle }) => (
  <>
  <HeaderStyled>
    <LinkStyled to="/about">
      about
    </LinkStyled>
    <LinkStyled to="/projects">
      projects
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
