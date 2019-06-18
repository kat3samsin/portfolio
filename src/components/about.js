import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';


const AboutMe = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 180px;
    font-size: 4em;
  }
  padding-top: 270px;  
  font-size: 5em;
  font-style: italic;
`;

const Avatar = styled.div`
  display: inline-block;
  padding: 20px;
`;

const Description = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
  font-size: 1.2em;
  display: inline-block;
  // max-width: 700px;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <>
      <AboutMe data-aos='fade-in'>{frontmatter.title}</AboutMe>
      <Avatar data-aos='fade-in'><Img fixed={frontmatter.avatar.childImageSharp.fixed} alt='avatar' /></Avatar>
      <Description data-aos='fade-in'>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Description>
    </>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
