import React from "react";
import ReactWOW from "react-wow";

import Terminal from "../terminal/terminal";

import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: [
        "$ cd dalcy-fabricio\n`$dalcy-fabricio>` npm start^1000\n`<span style='font-size:20px'>Hi. I'm <span style='color: red'>Dalcy Fabrício</span><span id='animation'>...</span></span>`"
      ]
    };
  }

  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 title">
              <p className="font-title">Welcome to my World</p>
              <p className="lead">
                Beginner Front End Developer and The Simpsons fan
              </p>
            </div>
            <div className="col-lg-6 terminal">
              <Terminal data={this.state.phrase} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
