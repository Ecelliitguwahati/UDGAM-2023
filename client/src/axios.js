import axios from "axios";

const instance = axios.create({
  baseURL: "http://verysecretapir.udgamiitg.com/",
});

export default instance;