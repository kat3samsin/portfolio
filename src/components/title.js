import React from "react"
import {useSpring, animated} from 'react-spring'

const Title =() => {
  const props = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -1000}})
  return <animated.div style={props}><h1>I will fade in</h1></animated.div>
}
export default Title