import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import tawkTo from "tawkto-react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const tawkToPropertyId = "607fbc5a62662a09efc090fd";

    // Direct Chat Link
    // https://tawk.to/chat/tawkToPropertyId/tawkToKey
    //'https://embed.tawk.to/607fbc5a62662a09efc090fd/1f3pffhde'

    const tawkToKey = "1f3pffhde";

    tawkTo(tawkToPropertyId, tawkToKey);

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Who are we?
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Message us
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Best Mobile Recommender</h1>
            <h3>
              Buying a new mobile phone? We suggest you to take a look over here
              and make a good decision to buy the best mobile in your budget.
            </h3>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
