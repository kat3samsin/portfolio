import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
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
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)

`;

const Description = styled(animated.div)`
  font-size: 1.2em;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
        <Description style={down}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Description>
    </HeroContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
