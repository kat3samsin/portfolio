import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Work from '../components/work';
import SEO from '../components/seo';

import 'semantic-ui-css/semantic.min.css';
import '../layouts/index.css';

class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }

  render() {
    const data = this.props.data;
    return (
      <Layout>
        <SEO
          title="Portfolio"
          keywords={[
            `katrina`,
            `lou`,
            `samsin`,
            'tantay',
            'gatsby',
            'portfolio',
            'react',
            'software',
            'developer',
            'frontend',
            'backend',
            'philippines',
            'manila',
          ]}
        />
        <Hero id="hero" data={data.hero.edges} />
        <About data={data.about.edges} />
        <Work data={data.work.edges} />
        <Skills data={data.skills.edges} />
        {/* <Projects data={data.projects.edges} /> */}
      </Layout>
    );
  }
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

// export default IndexPage
export default props => (
  <StaticQuery
    query={graphql`
      {
        hero: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/hero/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                roles
                start
                end
                name
                wave {
                  childImageSharp {
                    fixed(width: 80, height: 80) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                email {
                  childImageSharp {
                    fixed(width: 20, height: 20) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
        skills: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/skills/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
        about: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/about/" } }
        ) {
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
        work: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/work/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                company
                date
                range
              }
              html
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
);
