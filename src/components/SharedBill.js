import React from 'react';
import Header from './Header';
import { Link } from 'react-router';
class SharedBill extends React.Component{

  componentDidMount(){

    const calculateButton = document.querySelector('#tipSubmit');
    const totalPlusTips = document.querySelector('#totalPlusTips');
    const form = document.querySelector('#yourTipForm');

    calculateButton.addEventListener('click', function(){

      let billTotal = document.querySelector('#billTotal').value;
      let billTip = document.querySelector('#billTip').value;
      let numberOfPeople = document.querySelector('#numberOfPeople').value;

      billTotal = parseInt(billTotal, 10);
      billTip = parseInt(billTip, 10);
      billTip = billTip / 100;
      numberOfPeople = parseInt(numberOfPeople, 10);
      const billPlusTip = billTotal + (billTotal * billTip);
      const total = (billTotal + (billTotal * billTip)) / numberOfPeople;

      totalPlusTips.classList.add('active');
      if (isNaN(total)) {
        totalPlusTips.innerHTML = 'Please enter Total, Tips &amp; People!';
      } else {
          totalPlusTips.innerHTML =
          `
            <ul class="TipResult">
              <li>
                Bill: £${billTotal}
              </li>
              <li>
                Tip: ${billTip * 100}%
              </li>
              <li>
                Bill + Tip: £${billPlusTip}
              </li>
              <li>
                People: ${numberOfPeople}
              </li>
            </ul>
            <div id="totalToPayEach">
              Total each: £${total}
            </div>
          `;
      }

      form.reset();

    });

  }

  render(){


    return(
      <main>

        <Header />

        <div id="tipForm">
          <nav id="serviceSelect">
            <Link id="yourTip" className="button-big" to="/">
              <span className="icon-user"></span> Your Bill
            </Link>
            <Link to="/shared/" id="shareOfBill" className="button-big active">
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

              <ul className="flex-container bill-forms people">
                <li>
                  <label htmlFor="numberOfPeople"><span className="icon-people"></span> People Sharing</label>
                  <input type="number" name="numberOfPeople" placeholder="e.g.: 3" ref="numberOfPeople" id="numberOfPeople" /></li>

              </ul>

              <div id="totalPlusTips"></div>

            <button type="button" id="tipSubmit" name="Calculate"><span className="icon-wallet"></span> Calculate</button>

          </form>
        </div>
      </main>
    )
  }
}

export default SharedBill;
