import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Typist from 'react-typist';


const AboutMe = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 180px;
    font-size: 4em;
  }
  padding-top: 270px;  
  font-size: 5em;
  font-style: italic;
`;

const AvatarContainer = styled.div`
  display: inline-block;
  vertical-align:top;
  padding: 20px;
`;

const Description = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
  font-size: 1.2em;
  display: inline-block;
  max-width: 700px;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <>
      <AboutMe data-aos='fade-in'>{frontmatter.title}</AboutMe>
      <AvatarContainer data-aos='fade-up'>
        <Img fixed={frontmatter.avatar.childImageSharp.fixed} alt='avatar' />
      </AvatarContainer>
      <Description data-aos='fade-in'>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div style={{display: `inline-block`}}>I have a full spectrum of interests. I'm a
        <Typist cursor={{show:false}}>
          {frontmatter.hobbies && frontmatter.hobbies.map((hobby, i) => 
            <div style={{display: `inline-block`}}>{hobby}<Typist.Backspace count={hobby.length} delay={500}/></div>)}
            {frontmatter.hobbies.join(', ')}{frontmatter.summary}
        </Typist>
        </div>
      </Description>
    </>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
