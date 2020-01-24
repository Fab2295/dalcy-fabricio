import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About.js";
import Project from "./Components/project/Project";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      isLoading: true
    };

    this.handleScrollTop = this.handleScrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollTop, false);

    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));
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
    return this.state.isLoading ? (
      <p>Carregando</p>
    ) : (
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
