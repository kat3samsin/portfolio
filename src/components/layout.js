/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-areas: "header"
                       "sidebar main"
                       "footer"
`;

const HeaderStyled = styled(Header)`
  grid-template-area: header;
`;

const Main = styled.div`
  grid-template-area: main;
`;
const Footer = styled.footer`
  grid-template-area: footer;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer>
            © {new Date().getFullYear()}, kat3samsin
          </Footer>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
