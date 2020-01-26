import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="col-sm my-col-4">
      <div
        className="card bg-light card-shadown"
        style={{ minHeight: "250px" }}
      >
        <div className="card-body">
          <h4 className="card-title">{props.data.name}</h4>
          <p className="card-text">
            {props.data.description + props.data.homepage}
          </p>
          <a
            href={props.data.html_url}
            target="_blank"
            className="card-link"
            rel="noopener noreferrer"
          >
            Github Project
          </a>
          {props.data.homepage != null ? (
            <a
              href={props.data.homepage}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
