import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import Logo from '../../images/logo.jpg'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  showMenu() {
    this.setState({ 
      showMenu: !this.state.showMenu 
    });
  }

  hideMenu() {
    this.setState({ 
      showMenu: !this.state.showMenu 
    });
  }

  render () {
    return (
      <header className={this.state.showMenu ? 'top-header show-menu' : 'top-header'}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="logo">
                <IndexLink to='/'><img src={Logo} alt={"Logo"} title="BookingGenius" /></IndexLink>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-xs-12">
              <div className="lg-sign-otr">
                <ul>
                  <li><Link to='/login'>Log In</Link></li>
                  <li><Link to='/signup'>SIGN UP</Link></li>
                </ul>
              </div>
              <div className="menu-wrp">                    
                <nav className="main-nav">
                  <ul>                                    
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/browse'>Browse</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                  </ul>
                </nav>
                <div className="mob-btn" onClick={() => this.showMenu()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="overlay" onClick={() => this.hideMenu()}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
}

export default Header
