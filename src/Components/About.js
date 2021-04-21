import React, { Component } from "react";

class about extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Who are we</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h4>We are a team of mobile technology geeks</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>What we do</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4>
              We perform detailed analysis on every device available on every
              aspects
            </h4>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Why we do</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h4>
              To make your hard earned money make perfect sense on the mobile
              you buy
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default about;
