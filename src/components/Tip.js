import React from 'react';
import { Link } from 'react-router';
// import PercentageForm from './PercentageForm';

class Tip extends React.Component{

  componentDidMount(){

    const calculateButton = document.querySelector('#tipSubmit');
    const totalPlusTips = document.querySelector('#totalPlusTips');
    const form = document.querySelector('#yourTipForm');

    calculateButton.addEventListener('click', function(){

      let billTotal = document.querySelector('#billTotal').value;
      let billTip = document.querySelector('#billTip').value;

      billTotal = parseInt(billTotal, 10);
      billTip = parseInt(billTip, 10);
      billTip = billTip / 100;

      const total = billTotal + (billTotal * billTip);

      totalPlusTips.classList.add('active');
      if (isNaN(total)) {
        totalPlusTips.innerHTML = 'Please enter Total &amp; Tips!';
      } else {
          totalPlusTips.innerHTML =
          `
            <ul id="tipResult">
              <li>
                Bill: £${billTotal}
              </li>
              <li>
                Tip: ${billTip * 100}%
              </li>
            </ul>
            <div id="totalToPay">
              Total: £${total}
            </div>
          `;
      }

      form.reset();

    });

  }

  render(){

    return(
      <div id="tipForm">
        <nav id="serviceSelect">
          <Link id="yourTip" className="button-big active" to="/">
            <span className="icon-user"></span> Your Bill
          </Link>
          <Link to="/shared/" id="shareOfBill" className="button-big">
            <span className="icon-people"></span> Shared Bill
          </Link>
        </nav>

        <form className="flex-container active" id="yourTipForm" method="post" ref="calculateTipForm">


            <ul className="flex-container bill-forms">
              <li>£<input type="number" name="Total" placeholder="Total" ref="billTotal" id="billTotal" /></li>
              <li><input type="number" name="Tip" placeholder="Tip" ref="billTip" id="billTip" list="defaultNumbers" />%
                <datalist id="defaultNumbers">
                  <option value="5" />
                  <option value="10" />
                  <option value="15" />
                  <option value="20" />
                </datalist>
              </li>
            </ul>

            <div id="totalPlusTips"></div>

            {/*
              <input type="checkbox" name="customTipCheckbox" id="customTipCheckbox" className="css-checkbox" />
              <label htmlFor="customTipCheckbox" className="css-label">Custom Tip</label>
            */}

          <button type="button" id="tipSubmit" name="Calculate"><span className="icon-wallet"></span> Calculate</button>

        </form>
      </div>
    )
  }
}

export default Tip;
