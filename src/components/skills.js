import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SkillsTitle = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 180px;
    font-size: 4em;
  }
  padding-top: 200px;
  font-family: Dank Mono Italic;
  font-size: 5em;
  font-weight: bold;
`;

const Skill = styled.div`
  font-size: 1.2em;
`;

const Skills = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <div id="skills">
      <SkillsTitle className="title" data-aos="fade-in">
        {frontmatter.title}
      </SkillsTitle>
      <Skill data-aos="fade-in">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Skill>
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
