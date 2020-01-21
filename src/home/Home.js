import React from "react";

import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="font-h1">
                DALCY FABRÍCIO
              </h1>
              <p className="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
