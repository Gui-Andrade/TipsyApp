import React from 'react';
import Header from './Header';

class Contact extends React.Component{

  render(){

    return(
      <main>
        <Header tagline="Always pay and tip right" />

        <div id="about" className="internal">

          <h2>Contact</h2>

          <p>
            <span className="icon-envelope-open"></span> Email: bla@bla.com
          </p>
          <p>
            <span className="icon-call-out"></span> Tel: 0709 777 8888
          </p>

        </div>
      </main>
    )
  }
}

export default Contact;
