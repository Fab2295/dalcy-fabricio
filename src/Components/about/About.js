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
              <p className="text-center text-wrap">
                Hello! My name is Dalcy Fabrício and i'm Developer. I am a
                Student in the Faculty of Computer Science at the University
                F.G. I have basic English, but I'm studying to be fluent. I'm
                interested in being a Front End developer and my knowledge is in
                Javascript and ReactJS. My phone number is (81) 99784-8638
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}
