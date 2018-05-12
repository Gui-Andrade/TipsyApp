import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  componentDidMount(){
    const hamburger = document.querySelector('.MainHeader-Hamburger');
    const menu = document.querySelector('.MainHeader nav');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        hamburger.classList.toggle('icon-close')
    });
  }

  render(){

    return (
      <header className="MainHeader">

        <div className="MainHeader-Hamburger icon-menu"></div>

        <nav className="MainHeader-Nav">
          <ul className="MainHeader-Menu">
            <li className="MainHeader-Menu-Item">
              <Link to="/about/">
                <span className="icon-question"></span> About
              </Link>
            </li>
            <li className="MainHeader-Menu-Item">
              <Link to="/">
                <span className="icon-wallet"></span> Calculate
              </Link>
            </li>
            <li className="MainHeader-Menu-Item">
              <Link to="/pasttips/">
                <span className="icon-location-pin"></span> Past Tips
              </Link>
            </li>
            <li className="MainHeader-Menu-Item">
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
