import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Hello = styled.div`
  font-size: 4em;
`;

const Wave = styled.div`
  font-size: 4em;
  animation: {
    0% { transform: skewX(-15deg); }
    15% { transform: skewX(15deg); }
    20% { transform: skewX(0deg); }
    100% { transform: skewX(0deg); }  
  } .8s infinite alternate;
`;

const Name = styled.div`
  font-size: 1.2em;
  grid-column: 3 / 5;
  grid-row: 3;
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (      
    <StyledMain>
        <Hello>{frontmatter.title}</Hello>
        <Wave>{frontmatter.wave}</Wave>
        <Name>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Name>
    </StyledMain>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
