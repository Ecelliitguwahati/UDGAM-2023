import axios from "axios";

const instance = axios.create({
  baseURL: "http://verysecretapir.udgamiitg.com:3000/",
});

export default instance;
