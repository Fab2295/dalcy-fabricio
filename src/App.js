import React from "react";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };

    this.handleScrollTop = this.handleScrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollTop, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollTop, false);
  }

  handleScrollTop() {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 50) {
      this.setState({
        className: "navbar-animation-scroll"
      });
    } else {
      this.setState({
        className: ""
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header className={this.state.className} />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
