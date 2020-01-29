import React, { Component } from "react";
import Form from "./form/Form";

export default class Contact extends Component {
  render() {
    return (
      <div className="container h-100">
        <div className="row container h-100 align-items-center">
          <div className="col-sm">
            <h1>Contact</h1>
          </div>
          <div className="col-sm">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
