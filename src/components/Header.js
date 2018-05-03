import React from 'react';

const Header = (props) => {
  return (
    <header className="mainHeader">

      <div className="nav-hamburger">
        <span className="hamb"></span>
        <span className="hamb"></span>
        <span className="hamb"></span>
      </div>

      <nav>
        <ul>
          <li>About</li>
          <li>Calculate</li>
          <li>Contact</li>
        </ul>
      </nav>

      <h1>
        <img src="/images/tipsy-logo.png" alt="" />
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
