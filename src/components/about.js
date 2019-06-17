import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  display: grid;
  grid-template-cols: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1em;
`;

const AboutMe = styled.div`
  font-size: 5em;
  grid-column: 1 / span 12;
  grid-row: 3;
`;

const Avatar = styled(Img)`
  width: 15%;
  height: 20%;
  grid-column: 1 / span 2;
  grid-row: 4;
`
const Description = styled.div`
  font-size: 1em;
  grid-column: 3 / span 10;
  grid-row: 4;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <StyledMain>
      <AboutMe>{frontmatter.title}</AboutMe>
      <Avatar fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" alt='avatar' style={{
        width: `130px`,
        height: `150px`
      }}
      />
      <Description>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Description>
    </StyledMain>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
