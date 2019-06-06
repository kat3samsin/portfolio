import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Hello = styled.div`
  font-size: 5em;
  
`;

const Name = styled.div`
  font-size: 1.2em;
  top: 10%;
  
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <HeroContainer>
        <Hello>{frontmatter.title}</Hello>
        <Name>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Name>
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
