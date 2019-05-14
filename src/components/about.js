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
  width: 100%;
  height: 100%
`;

const AboutMe = styled(animated.div)`
  font-size: 5em;
  margin: 0;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%)
`;

const Description = styled(animated.p)`
  font-size: 1em;
  color: black;
`;

const DescriptionContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 25%;
  left: 20%;
  // transform: translate(-50%, -50%);
  padding: 10%;
  // border-radius: 5px;
`;

const Avatar = styled(Img)`
  width: 15%;
  height: 30%;
  border-radius: 5px; 
  top: -40%
  left: 20%
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 3px solid white;
  // box-shadow: 5px 5px gray;
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
