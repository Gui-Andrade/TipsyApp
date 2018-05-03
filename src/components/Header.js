import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="mainHeader">

      <div className="nav-hamburger icon-menu"></div>

      <nav>
        <ul>
          <li>About</li>
          <li>Calculate</li>
          <li>Contact</li>
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

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
