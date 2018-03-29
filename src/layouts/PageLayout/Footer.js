import React from 'react'
import { Link } from 'react-router'
import FooterLogo from '../../images/footer-logo.jpg'

class Footer extends React.Component {
  render () {
    return (
      <footer> 
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="ftr-logo">
                <Link to='/'><img src={FooterLogo} alt=""/></Link>
                <p>&copy; 2018 BookingGenius<br/> All rights reserved.</p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="socl">
                <ul>
                  <li><a href="" className="icon-facebook"></a></li>
                  <li><a href="" className="icon-instagram"></a></li>
                  <li><a href="" className="icon-pinterest"></a></li>
                  <li><a href="" className="icon-twitter"></a></li>                      
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer
