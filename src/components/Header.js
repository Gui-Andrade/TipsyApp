import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  componentDidMount(){
    const hamburger = document.querySelector('.mainHeader-hamburger');
    const menu = document.querySelector('.mainHeader nav');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        hamburger.classList.toggle('icon-close')
    });
  }

  render(){

    return (
      <header className="mainHeader">

        <div className="mainHeader-hamburger icon-menu"></div>

        <nav className="mainHeader-nav">
          <ul className="mainHeader-menu">
            <li className="mainHeader-menu-item">
              <Link to="/about/">
                <span className="icon-question"></span> About
              </Link>
            </li>
            <li className="mainHeader-menu-item">
              <Link to="/">
                <span className="icon-wallet"></span> Calculate
              </Link>
            </li>
            <li className="mainHeader-menu-item">
              <Link to="/pasttips/">
                <span className="icon-location-pin"></span> Past Tips
              </Link>
            </li>
            <li className="mainHeader-menu-item">
              <Link to="/contact/">
                <span className="icon-call-out"></span> Contact
              </Link>
            </li>
          </ul>
        </nav>

        <h1>
          <Link to="/">
            <img src="/images/tipsy-logo.png" alt="" />
            <span className="icon-cup"></span>
          </Link>
        </h1>

        <h3>
          Always pay and tip right
        </h3>

      </header>
    )
  }
}

Header.propTypes = {
  // tagline: React.PropTypes.string.isRequired
}

export default Header;
