import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const AboutMe = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 4em;
  }
  padding-top: 270px;
  font-family: Dank Mono Italic;
  font-size: 5em;
  font-weight: bold;
`;

const AvatarContainer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 0px 100px;
  }
  display: inline-block;
  vertical-align: top;
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
    <div id="about">
      <AboutMe className="title" data-aos="fade-in">
        {frontmatter.title}
      </AboutMe>
      <AvatarContainer data-aos="fade-up">
        <Img fixed={frontmatter.avatar.childImageSharp.fixed} alt="avatar" />
      </AvatarContainer>
      <Description data-aos="fade-left">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div style={{ display: `inline-block` }}>
          I have a full spectrum of interests. I'm a
          <Typist cursor={{ blink: true, hideWhenDone: true }}>
            {frontmatter.hobbies &&
              frontmatter.hobbies.map((hobby, i) => (
                <div key={i} style={{ display: `inline-block` }}>
                  {hobby}
                  <Typist.Backspace count={hobby.length} delay={500} />
                </div>
              ))}
            {frontmatter.hobbies.join(', ')}
            {frontmatter.summary}
          </Typist>
        </div>
      </Description>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
