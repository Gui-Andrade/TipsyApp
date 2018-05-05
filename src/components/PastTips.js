import React from 'react';
import Header from './Header';
import pasttips from '../pastTips.js';
import PastTip from './PastTip';

class PastTips extends React.Component{

  constructor(){

    super();

    this.state = {
      tips: {}
    };
  }

  componentDidMount(){

    this.setState({tips: pasttips})

  }
  render(){

    return(
      <main>
        <Header tagline="Always pay and tip right" />

        <div id="about" className="internal">

          <h2>Saved Tips History</h2>

          <div id="pastTipsResult">
            {Object.keys(this.state.tips).map(key =>
              (<PastTip index={key} key={key} tipsData={this.state.tips[key]} />))
              }
          </div>

        </div>
      </main>
    )
  }
}

export default PastTips;
