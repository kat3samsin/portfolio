import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
`;

const LinkStyled = styled(Link)`
  font-size: 1.2em;
  padding: 10px;
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <>
  <HeaderStyled>
    <LinkStyled to="./about">
      About
    </LinkStyled>
    {/* <LinkStyled to="/projects">
      Projects
    </LinkStyled>
    <LinkStyled to="/skills">
      Skills
    </LinkStyled> */}
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
