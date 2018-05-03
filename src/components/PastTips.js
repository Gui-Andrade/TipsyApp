import React from 'react';
import Header from './Header';

class PastTips extends React.Component{

  render(){

    return(
      <main>
        <Header tagline="Always pay and tip right" />

        <div id="about" className="internal">

          <h2>Saved Tips History</h2>

          <p>
            [ Insert Map here ]
          </p>

        </div>
      </main>
    )
  }
}

export default PastTips;
