import axios from "axios";

const instance = axios.create({
//	baseURL: "https://udgamiitg.com/backend",
baseURL:"http://localhost:5000/backend/"
});

export default instance;
