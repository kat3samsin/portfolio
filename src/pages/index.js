import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects";
import SEO from "../components/seo"

import "../layouts/index.css";

class IndexPage extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 3000
    })
  }
  
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <SEO title="hello there." keywords={[`katrina`, `lou`, `samsin`, 'tantay', 'gatsby', 'portfolio']} />
        <Hero data={data.hero.edges}/>
        <About data={data.about.edges}/>
        <Projects data={data.projects.edges}/>
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
              wave {
                childImageSharp {
                  fixed(width: 80, height: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            html
          }
        }
      }
      projects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
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
              avatar {
                childImageSharp {
                  fixed(width: 130, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              hobbies
              summary
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

