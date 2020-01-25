import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-sm-4">
            <h1 className="text-center title">About me</h1>
          </div>
          <div className="col-sm-8">
            <ScrollAnimation animateIn="fadeIn">
              <p className="text-center">Hello! I am developer.</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
