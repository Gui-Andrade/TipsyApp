import React from 'react';

class PercentageForm extends React.Component{

  componentDidMount(){

    // const percentageLabel = this;

    // linkd.addEventListener('click', function(e){
    //   e.preventDefault();
    //   console.log(this)
    // }, false);

  }

  render() {

    return (
      <div className="select animated zoomIn">

        <input type="radio" name="option" />
        <i className="toggle icon icon-arrow-down"></i>
        <i className="toggle icon icon-arrow-up"></i>
        <span className="placeholder">Choose Percentage...</span>
        <label className="option" htmlFor="five" id="labelFive">
            <input type="radio" name="option" id="five" />
            <span className="title animated fadeIn">5%</span>
        </label>
        <label className="option">
            <input type="radio" name="option" id="ten" />
            <span className="title animated fadeIn">10%</span>
        </label>
        <label className="option">
            <input type="radio" name="option" id="fifteen" />
            <span className="title animated fadeIn">15%</span>
        </label>
        <label className="option">
            <input type="radio" name="option" id="twenty" />
            <span className="title animated fadeIn">20%</span>
        </label>
      </div>
    )
  }
}

export default PercentageForm;
