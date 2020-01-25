import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-sm">
            <h1 className="text-center title">About me</h1>
            <ScrollAnimation animateIn="fadeIn">
              <p className="text-center">Hello! I am developer.</p>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}
