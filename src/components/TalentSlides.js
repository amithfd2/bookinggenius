import React from 'react'
import SlickSlider from './common/SlickSlider'

class TalentSlides extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-hd">
                    <h1>Hire a talent for your party in the<br/> best way possible!</h1>
                    <p>Birthday party, wedding, funeral, you name it - BookingGenius can help you find a talent<br/> for any occasion.</p>
                </div>
            </div>

            <SlickSlider />
                
            <SlickSlider />
        </div>
    </div>
    );
  }
}

export default TalentSlides
