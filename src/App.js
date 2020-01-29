import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About.js";
import Project from "./Components/project/Project";
// import Contact from "./Components/contact/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
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
        <Project />
      </div>
    );
  }
}

export default App;
