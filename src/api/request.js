import axios from "axios";

const Axios = axios.create({
  baseURL: "https://wordle-backend-tlgp.onrender.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export default Axios;
