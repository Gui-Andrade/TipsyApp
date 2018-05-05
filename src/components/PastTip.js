import React from 'react';

class PastTip extends React.Component{

  render(){
    const { tipsData, index } = this.props;
    return(
    <article>
      <h3>Restaurant: {tipsData.restaurant}</h3>
      <i>Date: {tipsData.date}</i>
      <ul>
        <li>Bill: {tipsData.bill}</li>
        <li>Tip: {tipsData.tip}</li>
        <li>People: {tipsData.people}</li>
        <li>Total Each: {tipsData.totalEach}</li>
      </ul>
    </article>
    )
  }
}

export default PastTip;
