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

// import Header from "./header"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding: 120px 100px;
  max-width: 1440px;
  margin: 10 auto;
`;

const Main = styled.div`
`;

const Footer = styled.footer`
  padding: 10px 10px;
  margin: 10 auto;
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
      <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Container>
          <Main>{children}</Main>
      </Container>
      <Footer>
      © {new Date().getFullYear()}, kat3samsin
      </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
