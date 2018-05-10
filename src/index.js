import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App';
import About from './components/About';
import PastTips from './components/PastTips';
import Contact from './components/Contact';
import SharedBill from './components/SharedBill';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/index-offline.html" component={App} />
        <Match exactly pattern="/about/" component={About} />
        <Match exactly pattern="/pasttips/" component={PastTips} />
        <Match exactly pattern="/contact/" component={Contact} />
        <Match exactly pattern="/shared/" component={SharedBill} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'))
