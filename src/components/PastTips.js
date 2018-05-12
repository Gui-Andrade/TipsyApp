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

        <Header />

        <div className="internal">

          <h2>Saved Tips History</h2>

          <div className="PastTipsResult">
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
