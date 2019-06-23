import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Typist from 'react-typist';

const Hello = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 0px;
    font-size: 4em;
  }
  padding-top: 50px;
  font-family: Dank Mono Italic;
  font-size: 5em;
  font-style: italic;
  font-weight: bold;
  display: inline-block;
`;

const helloWave = keyframes`
  0% { transform: rotate(  0.0deg) }
  10% { transform: rotate(-10.0deg) }
  20% { transform: rotate( 12.0deg) }
  30% { transform: rotate(-10.0deg) }
  40% { transform: rotate(  9.0deg) }
  50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`;

const Wave = styled(Img)`
  animation-name: ${helloWave};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const WaveContainer = styled.div`
  display: inline-block;
`;

const Greetings = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
  }
  font-size: 1.7em;
  max-width: 700px;
  padding-top: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const Email = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const Hero = ({ data }) => {
  const { frontmatter } = data[0].node;
  return (
    <div id="home">
      <Hello className="title" data-aos="fade-in">
        {frontmatter.title}
      </Hello>
      <WaveContainer data-aos="fade-in">
        <Wave fixed={frontmatter.wave.childImageSharp.fixed} alt="hello" />
      </WaveContainer>
      <Greetings data-aos="fade-up">
        I'm&nbsp;<Name>Katrina Tantay.&nbsp;</Name>
        <Typist cursor={{ blink: true, hideWhenDone: true }}>
          {frontmatter.start}&nbsp;
          {frontmatter.roles &&
            frontmatter.roles.map((roles, i) => (
              <div key={i} style={{ display: `inline-block` }}>
                {roles}
                <Typist.Backspace count={roles.length} delay={500} />
              </div>
            ))}
          {frontmatter.roles.join(', ')}&nbsp;
          {frontmatter.end}
        </Typist>
      </Greetings>
      <br />
      <div data-aos="fade-up">
        Let's chat!&nbsp;
        <Img fixed={frontmatter.email.childImageSharp.fixed} alt="email" />
        &nbsp;
        <Email
          href="mailto:kat3samsin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kat3samsin@gmail.com
        </Email>
      </div>
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
