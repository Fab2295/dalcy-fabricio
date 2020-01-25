import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="row h-100 align-items-center">
      {props.data.map(value => (
        <div className="col-sm">
          <div className="settings-card">
            <div className="card" style={{ minHeight: "200px" }}>
              <div className="card-body">
                <h4 className="card-title">{value.name}</h4>
                <p className="card-text">
                  {value.description + value.homepage}
                </p>
                <a href={value.html_url} className="card-link">
                  Github Project
                </a>
                {value.homepage != null ? (
                  <a href={value.homepage} className="card-link">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
