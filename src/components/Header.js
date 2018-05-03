import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  componentDidMount(){
    const hamburger = document.querySelector('.nav-hamburger');
    const menu = document.querySelector('.mainHeader nav');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('visible');
        console.log('clicked hamburger');
    });
  }

  render(){

    const props = {...this.props}

    return (
      <header className="mainHeader">

        <div className="nav-hamburger icon-menu"></div>

        <nav>
          <ul>
            <li>
              <Link to="/about/">
                About
              </Link>
            </li>
            <li>
              <Link to="/">
                Calculate
              </Link>
            </li>
            <li>
              <Link to="/pasttips/">
                Past Tips
              </Link>
            </li>
            <li>
              <Link to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <h1>
          <Link to="/">
            <img src="/images/tipsy-logo.png" alt="" />
          </Link>
        </h1>

        <h3 className="tagline">
          <span>
            { props.tagline }
          </span>
        </h3>

      </header>
    )
  }
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
