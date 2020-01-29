import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header info-color white-text text-center py-4">
          <strong>Contact us</strong>
        </h5>

        <div className="card-body px-lg-5 pt-0">
          <form
            className="text-center"
            style={{ color: "#757575" }}
            action="#!"
          >
            <div className="md-form mt-3">
              <label for="materialContactFormName">Name</label>
              <input
                type="text"
                id="materialContactFormName"
                className="form-control"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
