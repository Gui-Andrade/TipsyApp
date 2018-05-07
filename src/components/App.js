import React from 'react';
import Header from './Header';
import Tip from './Tip';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      tips: {}
    }
    // console.table(tips)
  }

  componentWillMount(){
    this.setState({
      // tips: tips
    });
  }

  calculateTip(e){
    e.preventDefault();

    // const tips = this.calculateTipForm;
  }

  render(){
    return (
        <main>

          <Header />

          <Tip {...this.props} />

        </main>
    )
  }

}

// App.contextTypes = {
//   // router: React.PropTypes.object
// }

export default App;
