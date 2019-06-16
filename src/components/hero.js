import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMain = styled.main`
  display: grid;
  grid-template-cols: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

const Hello = styled.div`
  font-size: 5em;
  grid-column: 3 / 12;
  grid-row: 3;
`;

const Name = styled.div`
  font-size: 1.2em;
  grid-column: 4 / 12;
  grid-row: 4;
`;

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <StyledMain>
      <Hello>{frontmatter.title}</Hello>
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
