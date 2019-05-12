import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import SEO from "../components/seo"

// import {useSpring, animated} from 'react-spring'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {config} from 'react-spring'

class IndexPage extends React.Component {
  scroll = to => this.DOMnode.scrollTo(to)
  getRef = node => {
    this.DOMnode = node
  }
  render() {
    return (
      <Layout>
        <SEO title="hello there." keywords={[`katrina`, `lou`, `samsin`, 'tantay', 'gatsby', 'portfolio']} />
        <Parallax pages={3} ref={this.getRef} config={config.slow} horizontal scrolling={false}>
          <ParallaxLayer offset={0} caption="home" speed={0.25} onClick={() => this.scroll(1)}>
            <Home />
            <div className='btn'>
              <button onClick={()=>this.scroll(1)}>next</button>
            </div>
            <div className='quote'>i'm a web developer</div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} caption="about" speed={0.25} onClick={() => this.scroll(2)}>
            <About />
            <div className='quote'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed accumsan nulla in feugiat interdum. Maecenas ex sapien, 
              maximus a lobortis vel, faucibus quis lectus. 
              Integer luctus ex quis ex pulvinar, vel dignissim nunc pharetra. 
              Etiam tempus ultrices tortor. 
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} caption="projects" speed={0.25} onClick={() => this.scroll(0)}>
            <Projects />
          </ParallaxLayer>
        </Parallax>
      </Layout>
    );
  }
}

export default IndexPage
