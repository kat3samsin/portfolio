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
  font-style: italic;
  font-weight: bold;
`;

const Skill = styled.div``;

const Skills = ({ data }) => {
  const { frontmatter } = data[0].node;
  return (
    <div id="skills">
      <SkillsTitle className="title" data-aos="fade-in">
        {frontmatter.title}
      </SkillsTitle>
      <Skill data-aos="fade-in">
        Languages
        <ul>
          {frontmatter.skills &&
            frontmatter.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </Skill>
      <Skill data-aos="fade-in">
        Tools
        <ul>
          {frontmatter.tools &&
            frontmatter.tools.map((tool, i) => <li key={i}>{tool}</li>)}
        </ul>
      </Skill>
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
