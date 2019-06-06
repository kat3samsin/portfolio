import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const HeroContainer = styled.div`
  position: relative;
`;

const AboutMe = styled.div`
  font-size: 5em;'
`;

const Description = styled.p`
  font-size: 1em;
  color: black;
`;

const Avatar = styled(Img)`
  max-width: 80px;
  max-height: 100px;
  border-radius: 5px; 
  border: 3px solid white;
`

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <HeroContainer>
      <AboutMe>{frontmatter.title}</AboutMe>
      <Avatar fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" alt='avatar'/>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Description>
    </HeroContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
