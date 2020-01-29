import React from "react";
import FaIconPack from "react-icons/lib/fa/align-left";
import "./header.css";

const Header = props => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${props.className}`}
    >
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaIconPack />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
