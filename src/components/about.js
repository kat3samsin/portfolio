import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const BackgroundSection = ({ className, children }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={children.childImageSharp.fluid}
      backgroundColor={`#D4D4DF`}
    />
  );
};

const BgImage = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const HeroContainer = styled.div`
  float: left;
  width: 100%;
  height: 100%
`;

const AboutMe = styled(animated.div)`
  font-size: 5em;
  margin: 0;
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-50%, -50%)
`;

const Description = styled(animated.p)`
  font-size: 1em;
  color: black;
`;

const DescriptionContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
  padding: 20px
  border-radius: 5px;
`;

const Avatar = styled(Img)`
  width: 250px;
  height: 300px;
  // border-radius: 100%; 
  top: -45%
  left: 80%
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 5px solid white;
`

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const up = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -1000 },
  });
  const down = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 1000 },
  });
  return (
    <HeroContainer>
      <BgImage>{frontmatter.background}</BgImage>      
      <AboutMe style={up}>{frontmatter.title}</AboutMe>
      <Avatar fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" alt='avatar'/>
      <DescriptionContainer>
        <Description style={down}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Description>
      </DescriptionContainer>
    </HeroContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
