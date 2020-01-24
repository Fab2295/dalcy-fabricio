import Axios from "axios";

const apiGithub = Axios.create({
  baseURL: "https://api.github.com/"
});

export default apiGithub;
