import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="row h-100 align-items-center">
      {props.data.map(value => (
        <div className="col-sm my-col-4" key={value.id}>
          <div
            className="card bg-light card-shadown"
            style={{ minHeight: "250px" }}
          >
            <div className="card-body">
              <h4 className="card-title">{value.name}</h4>
              <p className="card-text">{value.description + value.homepage}</p>
              <a
                href={value.html_url}
                target="_blank"
                className="card-link"
                rel="noopener noreferrer"
              >
                Github Project
              </a>
              {value.homepage != null ? (
                <a
                  href={value.homepage}
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
      ))}
    </div>
  );
}
