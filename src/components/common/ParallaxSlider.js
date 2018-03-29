import React from 'react'
import { Parallax } from 'react-parallax';
import Banner from '../../images/banner-bg.jpg'

class ParallaxSlider extends React.Component {
  render () {
    return (
      <div>
        <Parallax
          className="parallax-window"
          bgImage={Banner}
          bgImageAlt=""
          strength={0}
        >
          <div className="banner" />
        </Parallax>
      </div>
    );
  }
}

export default ParallaxSlider
