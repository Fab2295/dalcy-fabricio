import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container h-100">
          <div className="row pt-5 h-25 align-items-center">
            <div className="col-sm-12">
              <h1 className="text-center font-h1">Find out more about me</h1>
            </div>
          </div>
          <div className="row h-75 align-items-center text-center">
            <div className="col-sm">
              <ScrollAnimation animateIn="bounceInLeft">
                <h2>Bio</h2>
                <p id="text">Hello! I am developer.</p>
              </ScrollAnimation>
            </div>
            <div className="col-sm">
              <h1>Fotos</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
