import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectsTitle = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 180px;
    font-size: 4em;
  }
  padding-top: 270px;  
  font-size: 5em;
  font-style: italic;
`;

const Project = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
  font-size: 1.2em;
  display: inline-block;
  // max-width: 700px;
`;

const Projects = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  return (
    <>
      <ProjectsTitle data-aos='fade-in'>{frontmatter.title}</ProjectsTitle>
    </>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
