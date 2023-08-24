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
  font-weight: bold;
`;

const WorkContainer = styled.div`
  max-width: 700px;
  font-size: 1.2em;
`;

const Company = styled.div`
  font-weight: bold;
  font-family: Dank Mono Italic;
`;

const Work = ({ data }) => {
  return (
    <div id="work">
      <WorkTitle className="title" data-aos="fade-in">
        work
      </WorkTitle>

      {data &&
        data.map(({ node }, i) => {
          const { company, title, range } = node.frontmatter;
          return (
            <div key={i}>
              <WorkContainer data-aos="fade-in">
                <Company>
                  {title} at {company}
                </Company>
                {range}
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </WorkContainer>
            </div>
          );
        })}
    </div>
  );
};

Work.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Work;
