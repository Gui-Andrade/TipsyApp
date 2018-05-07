import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  componentDidMount(){
    const hamburger = document.querySelector('.nav-hamburger');
    const menu = document.querySelector('.mainHeader nav');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        hamburger.classList.toggle('icon-close')
    });
  }

  render(){

    return (
      <header className="mainHeader">

        <div className="nav-hamburger icon-menu"></div>

        <nav>
          <ul>
            <li>
              <Link to="/about/">
                <span className="icon-question"></span> About
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="icon-wallet"></span> Calculate
              </Link>
            </li>
            <li>
              <Link to="/pasttips/">
                <span className="icon-location-pin"></span> Past Tips
              </Link>
            </li>
            <li>
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

        <h3 className="tagline">
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
