import React, { useState, useEffect } from "react";
import apiGithub from "../../Services/api";
import ListCard from "./listCards/ListCard";
import ConsoleLog from "../../helper/ConsoleHelper";

import "./project.css";

export default function Project() {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      await apiGithub
        .get("users/Fab2295/repos")
        .then(response => {
          setLoading(false);
          setUser(response.data);
        })
        .catch(error => {
          ConsoleLog(error);
          return Promise.reject(error);
        });
    }

    loadUser();
  }, []);

  return (
    <div className="project">
      <div className="container h-100">
        <div className="row h-100 align-items-center text-center">
          <div className="col-lg-4">
            <h1 className="text-center title">My Projects</h1>
          </div>
          <div className="col-lg">
            {isLoading === false && user.length > 0 ? (
              <ListCard data={user} />
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
