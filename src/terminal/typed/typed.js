import React from "react";
import Typed from "typed.js";

import "./typed.css";

export default class TypedJS extends React.Component {
  componentDidMount() {
    const { phrase } = this.props;

    const options = {
      strings: phrase,
      typeSpeed: 100,
      backSpeed: 50
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    //destroy instance
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}
