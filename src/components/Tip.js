import React from 'react';
import { Link } from 'react-router';
import PercentageForm from './PercentageForm';

class Tip extends React.Component{

  render(){



    return(
      <div id="tipForm">
        <nav id="serviceSelect">
          <Link id="yourTip" className="button-big active" to="/">
            <button type="button" name="button">Your Bill</button>
          </Link>
          <Link to="/shared/" id="shareOfBill" className="button-big">
            <button type="button" name="button">Shared Bill</button>
          </Link>
        </nav>

        <form className="flex-container active" id="yourTipForm" method="post" ref="calculateTipForm">

          <input type="number" name="Total" placeholder="&pound; Total" id="billTotal" />

          <input type="checkbox" name="customTipCheckbox" id="customTipCheckbox" className="css-checkbox" />
          <label htmlFor="customTipCheckbox" className="css-label">Custom Tip</label>

          <PercentageForm />

          <button type="button" id="tipSubmit" name="Calculate">Calculate</button>

        </form>
      </div>
    )
  }
}

export default Tip;
