import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillsTitle = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 180px;
    font-size: 4em;
  }
  padding-top: 270px;
  font-family: Dank Mono Italic;
  font-size: 5em;
  font-style: italic;
`;

// const Skill = styled.div`
//   @media only screen and (max-width: 600px) {
//     font-size: 1em;
//   }
//   font-size: 1.2em;
//   display: inline-block;
//   // max-width: 700px;
// `;

const Skills = ({ data }) => {
  const { frontmatter } = data[0].node;
  return (
    <>
      <SkillsTitle data-aos='fade-in'>{frontmatter.title}</SkillsTitle>
      
    </>
  );
};

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
