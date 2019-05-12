import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import {useSpring, animated} from 'react-spring'

const BackgroundSection = ({ className }) => {
  const props = useSpring({opacity: 1, marginTop: 250, from: {opacity: 0, marginTop:-1000}});
  return(
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "3.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#D4D4DF`}
          >
            <div className='textContainer' style={{height: 650}}>
              <animated.div style={ props }>
                <div className='title'>projects.</div>
                
              </animated.div>
            </div>
          </BackgroundImage>
       )
     }
     }
    />
)}

const Projects = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Projects