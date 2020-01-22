import React from "react";
import ReactWOW from "react-wow";

import Terminal from "../terminal/terminal";

import "./home.css";

export default class Home extends React.Component {
  state = {
    phrase: [
      "$ cd dalcy-fabricio\n`$dalcy-fabricio>` npm start\n\n<span style='font-size:20px'>Hello. I'm <span style='color: red'>Dalcy Fabrício</span>...</span>"
    ],

    title: "Dalcy Fabrício"
  };

  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-sm-6">
              <ReactWOW animation="slideInLeft">
                <p className="font-title">Welcome to my World</p>
              </ReactWOW>
              <ReactWOW animation="slideInLeft" delay="1s">
                <p className="lead">
                  Beginner in programming and aspiring swimmer
                </p>
              </ReactWOW>
            </div>
            <div className="col-sm-6">
              <Terminal data={this.state.phrase} title={this.state.title} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
