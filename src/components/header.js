import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // marginBottom: `1rem`,  
      // marginLeft: `80%`,
      // marginRight: `5%`
    }}
  >
    <div style={{ margin: 5 }}>
      <Link
        to="/about"
        style={{
          color: `black`,
          fontSize: `1em`,
          textDecoration: `underline`,
          paddingRight: `10px`
        }}
      >
        about
      </Link>
      <Link
        to="/projects"
        style={{
          color: `black`,
          fontSize: `1em`,
          textDecoration: `underline`,
          paddingRight: `10px`
        }}
      >
        projects
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
