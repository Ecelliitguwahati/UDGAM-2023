import axios from "axios";

const instance = axios.create({
   baseURL: "http://verysecretapir.udgamiitg.com:3000/",
  //baseURL:"http://localhost:5000/"
});

export default instance;
