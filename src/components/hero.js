import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const Hello = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 0px;
    font-size: 3em;
  }
  padding-top: 100px;
  font-size: 5em;
  font-style: italic; 
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

const Wave = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }
  font-size: 5em;
  animation-name: ${helloWave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const Greetings = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
  }
  font-size: 1.7em;
  max-width: 700px;
  display: inline-block;
  padding-top: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (      
    <>
        <Hello data-aos='flip-right'>{frontmatter.title}</Hello>
        <Wave data-aos='fade-in'>{frontmatter.wave}</Wave>
        <Greetings data-aos='fade-in'>
          I'm&nbsp;<Name>Katrina Tantay.&nbsp;</Name>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Greetings>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
