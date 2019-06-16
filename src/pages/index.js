import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <SEO title="hello there." keywords={[`katrina`, `lou`, `samsin`, 'tantay', 'gatsby', 'portfolio']} />
        <Hero data={data.hero.edges}/>
        <About data={data.about.edges}/>
        {/* <Projects /> */}
      </Layout>
    );
  }
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

// export default IndexPage
export default (props) => (
  <StaticQuery
    query={graphql `
    {
      hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
        edges {
          node {
            frontmatter {
              title
              background {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            html
          }
        }
      }
      about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            frontmatter {
              title
              background {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              avatar {
                childImageSharp {
                  fluid( quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            html
          }
        }
      }
    }
    `}
    render={ data => (
      <IndexPage data={data}/>
    )
  }
  />
);

