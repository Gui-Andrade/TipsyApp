import React from 'react';
import Header from './Header';

class About extends React.Component{

  render(){

    return(
      <main>
        <Header />

        <div id="about" className="internal">

          <h2>About <span>[ this magnificent app ]</span></h2>

          <p>
            Tipsy is a free app to help you calculate the right amount to pay/tip when you're out and about.
          </p>
          <p>
            Especially at those moments when you can't quite be sure to get your maths right because you're tipsy*.
          </p>
          <blockquote cite="http://guiandrade.com">* See what I've done there? ;) <span>Gui Andrade</span></blockquote>

        </div>
      </main>
    )
  }
}

export default About;
