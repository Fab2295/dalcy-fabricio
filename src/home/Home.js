import React from "react";
import ReactWOW from "react-wow";

import Terminal from "../terminal/terminal";

import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: [
        "$ cd dalcy-fabricio\n`$dalcy-fabricio>` npm start\n\n`<span style='font-size:20px'>Hi. I'm <span style='color: red'>Dalcy Fabrício</span><span id='animation'>...</span></span>`"
      ]
    };
  }

  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 title">
              <ReactWOW animation="slideInLeft">
                <p className="font-title">Welcome to my World</p>
              </ReactWOW>
              <ReactWOW animation="slideInLeft" delay="0.5s">
                <p className="lead">
                  Beginner in programming and aspiring swimmer
                </p>
              </ReactWOW>
            </div>
            <div className="col-lg-6 terminal">
              <ReactWOW animation="fadeIn" delay="1s">
                <div>
                  <Terminal data={this.state.phrase} />
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
