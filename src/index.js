import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
