import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
  render(){
    return (
      <main>
        <Header />
          <h2 className="pnfHeader pnfHeader_big">
            <span className="icon-directions"></span> 404 - Page Not Found!
          </h2>
          <p>Darn! You seem to be lost.</p>
          <p>
            Here's a tip... ;)
          </p>
          <p>
            Please use the menu above to get your bearings or click on the logo to get back to the homepage.
          </p>


      </main>

    )
  }
}

export default NotFound;
