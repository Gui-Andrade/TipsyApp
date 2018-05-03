import React from 'react';

class Tip extends React.Component{
  // constructor(){
  //   super();
  //
  // }

  render(){

    return(
      <div id="tipForm">
        <nav id="serviceSelect">
          <button type="button" id="yourTip" name="button" className="button-big active">Your Tip</button>
          <button type="button" id="shareOfBill" name="button" className="button-big">Share of Bill</button>
        </nav>

        <form className="flex-container active" id="yourTipForm" method="post" ref="calculateTipForm">

          <input type="number" name="Total" placeholder="&pound; Total" id="billTotal" />
          <input type="number" name="Custom Tip" placeholder="&pound; Custom Tip" id="customTip" />

          <input type="checkbox" name="customTipCheckbox" id="customTipCheckbox" className="css-checkbox" />
          <label htmlFor="customTipCheckbox" className="css-label">Custom Tip</label>



          <div className="select animated zoomIn">

            <input type="radio" name="option" />
            <i className="toggle icon icon-arrow-down"></i>
            <i className="toggle icon icon-arrow-up"></i>
            <span className="placeholder">Choose...</span>
            <label className="option">
                <input type="radio" name="option" />
                <span className="title animated fadeIn">5%</span>
            </label>
            <label className="option">
                <input type="radio" name="option" />
                <span className="title animated fadeIn">10%</span>
            </label>
            <label className="option">
                <input type="radio" name="option" />
                <span className="title animated fadeIn">15%</span>
            </label>
            <label className="option">
                <input type="radio" name="option" />
                <span className="title animated fadeIn">20%</span>
            </label>
          </div>

          <button type="button" id="tipSubmit" name="Calculate">Calculate</button>

        </form>
      </div>
    )
  }
}

export default Tip;
