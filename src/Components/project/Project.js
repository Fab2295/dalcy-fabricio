import React, { useState, useEffect } from "react";
import apiGithub from "../../Services/api";

export default function Project() {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      await apiGithub
        .get("users/Fab2295/repos")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          return Promise.reject(error);
        });
    }

    loadUser();
  }, []);

  return <div></div>;
}
