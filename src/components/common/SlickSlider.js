import React from 'react'
import Slider from 'react-slick'
import Slide1 from '../../images/slide-01.jpg'
import Slide2 from '../../images/slide-02.jpg'
import Slide3 from '../../images/slide-03.jpg'

class SlickSlider extends React.Component {
  render () {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,            
          }
        },  
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,        
          }
        }    
      ]
    };
    return (
      <div className="hm-slide">
        <h4>Hot Talents</h4>
        <Slider {...settings}>
          <div className="col-md-4">
            <div className="box-full">
              <img src={Slide1} alt=""/>
              <div className="ftr">
                <div className="col-md-6 col-sm-12">
                  <strong>
                  <span>DANCER</span><br/>
                  David Lakovsky</strong>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="str-rvw">
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div><br/>
                      <span>93 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-full">
              <img src={Slide2} alt=""/>
              <div className="ftr">
                  <div className="col-md-6 col-sm-12">
                      <strong>
                      <span>SINGER</span><br/>
                      Hue Montorello</strong>
                  </div>
                  <div className="col-md-6 col-sm-12">
                      <div className="str-rvw">
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div><br/>
                          <span>98 Reviews</span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-full">
              <img src={Slide3} alt=""/>
              <div className="ftr">
                <div className="col-md-6 col-sm-12">
                    <strong>
                    <span>DJ</span><br/>
                    Lui Nesh</strong>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="str-rvw">
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div><br/>
                      <span>134 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-full">
              <img src={Slide2} alt=""/>
              <div className="ftr">
                <div className="col-md-6 col-sm-12">
                  <strong>
                  <span>SINGER</span><br/>
                  Hue Montorello</strong>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="str-rvw">
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div>
                      <div className="icon-star"></div><br/>
                      <span>93 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider
