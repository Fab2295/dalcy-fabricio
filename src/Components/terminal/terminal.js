import React from "react";
import * as PropTypes from "prop-types";

import TypedJS from "./typed/typed";

import "./terminal.css";

const Terminal = props => {
  return (
    <>
      <div className="menu">
        <div className="buttons minimize"></div>
        <div className="buttons zoom"></div>
      </div>
      <div className="screen">
        <TypedJS phrase={props.data} />
      </div>
    </>
  );
};

Terminal.defaultProps = {
  data: [
    "<b style='color: red'>You need to pass the String Array</b>\n`<span style='color: blue; font-size= 6px'>Try again...</span>`"
  ]
};

Terminal.propTypes = {
  data: PropTypes.array.isRequired
};

export default Terminal;
