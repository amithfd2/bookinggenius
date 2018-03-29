import React from 'react'
import Slider from 'react-slick'
import Slide1 from '../images/dsg-01.jpg'
import Slide2 from '../images/dsg-01.jpg'

class FeaturedReviews extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,        
          }
        }    
      ]
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wat-pel-scnt">
              <h2>What people are saying about<br/> BookingGenius</h2>

              <Slider {...settings} className="slide-people">
                <div className="col-md-6">
                  <div className="box">
                      <div className="str-dt">
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <div className="icon-star"></div>
                          <span>10 Feb 2018</span>
                      </div>
                      <strong> Great service!</strong>
                      <p>I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax porfessional per it helps you to file your taxes correctly while getting the largest tax refund can legally get.</p>
                      
                      <div className="ftr">
                          <div className="dsgn">
                              <img src={Slide1} alt=""/>
                              <div className="name-dgs">
                                  James Kan<br/>
                                  <span>Web developer</span>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="box">
                        <div className="str-dt">
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <span>10 Feb 2018</span>
                        </div>
                        <strong> Great service!</strong>
                        <p>I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax porfessional per it helps you to file your taxes correctly while getting the largest tax refund can legally get.</p>
                        
                        <div className="ftr">
                            <div className="dsgn">
                                <img src={Slide2} alt=""/>
                                <div className="name-dgs">
                                    Kate Nue<br/>
                                    <span>PR Consultant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="box">
                        <div className="str-dt">
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <span>10 Feb 2018</span>
                        </div>
                        <strong> Great service!</strong>
                        <p>I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax porfessional per it helps you to file your taxes correctly while getting the largest tax refund can legally get.</p>
                        
                        <div className="ftr">
                            <div className="dsgn">
                                <img src={Slide2} alt=""/>
                                <div className="name-dgs">
                                    Kate Nue<br/>
                                    <span>PR Consultant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="box">
                        <div className="str-dt">
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <div className="icon-star"></div>
                            <span>10 Feb 2018</span>
                        </div>
                        <strong> Great service!</strong>
                        <p>I’ve been using BookingGenius for at least 2 years. It makes you feel like a tax porfessional per it helps you to file your taxes correctly while getting the largest tax refund can legally get.</p>
                        
                        <div className="ftr">
                            <div className="dsgn">
                                <img src={Slide1} alt="" />
                                <div className="name-dgs">
                                    James Kan<br/>
                                    <span>Web developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </Slider>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedReviews
