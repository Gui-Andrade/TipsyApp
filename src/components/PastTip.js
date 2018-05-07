import React from 'react';

class PastTip extends React.Component{

  render(){
    const { tipsData } = this.props;
    return(
    <section>

      <h3>Restaurant: {tipsData.restaurant}</h3>
      <time dateTime={tipsData.date}>{tipsData.date}</time>
      <ul>
        <li>Bill: {tipsData.bill}</li>
        <li>Tip: {tipsData.tip}</li>
        <li>People: {tipsData.people}</li>
        <li>Total Each: {tipsData.totalEach}</li>
      </ul>
    </section>
    )
  }
}

export default PastTip;
