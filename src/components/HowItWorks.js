import React from 'react'
import ArrowRight from '../images/arw-rgt.png'
import Icon1 from '../images/icon-01.jpg'
import Icon2 from '../images/icon-02.jpg'
import Icon3 from '../images/icon-03.jpg'

class HowItWorks extends React.Component {
  render () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="hw-it-wk">
                        <h2>How it works</h2>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <div className="arw"><img src={ArrowRight} alt=""/></div>
                                <img src={Icon1} alt=""/>
                                <strong>I. Browse and compare. </strong>
                                <p>Compare rates and availability of local entertainers and vendors.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                 <div className="arw"><img src={ArrowRight} alt=""/></div>
                                <img src={Icon2} alt=""/>
                                <strong>II. Book securety.</strong>
                                <p>Booking through Gigsalad ensures payment protecton, amazing service, and no-hassle refund with our Worry-Fee Guarantee.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                                <img src={Icon3} alt=""/>
                                <strong>III. Enjoy your event.</strong>
                                <p>Sit back, relax, and watch your party come to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
  }
}

export default HowItWorks
