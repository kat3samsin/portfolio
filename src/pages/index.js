import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import SEO from "../components/seo"

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {config} from 'react-spring'

class IndexPage extends React.Component {
  scroll = to => this.DOMnode.scrollTo(to)
  getRef = node => {
    this.DOMnode = node
  }

  render() {
    const data = this.props.data;
    console.log(data)
    return (
      <Layout scroll={this.scroll}>
        <SEO title="hello there." keywords={[`katrina`, `lou`, `samsin`, 'tantay', 'gatsby', 'portfolio']} />
        <Parallax pages={2} ref={this.getRef} config={config.slow} horizontal scrolling={false}>
          <ParallaxLayer offset={0} caption="hero" speed={0.25} onClick={() => this.scroll(1)}>
            <Hero data={data.hero.edges}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} caption="about" speed={0.25} onClick={() => this.scroll(0)}>
            <About data={data.about.edges}/>
          </ParallaxLayer>
          {/* <ParallaxLayer offset={2} caption="projects" speed={0.25} onClick={() => this.scroll(0)}>
            <Projects />
          </ParallaxLayer> */}
        </Parallax>
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

