import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WorkTitle = styled.div`
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

const Work = ({ data }) => {
  return (
    <div id="work">
      <WorkTitle className="title" data-aos="fade-in">
        work
      </WorkTitle>
      <ul data-aos="fade-in">
        {data &&
          data.map(({ node }, i) => {
            const { company, title, range } = node.frontmatter;
            return (
              <li key={i}>
                {title} - {company} ({range})
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Work.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Work;
