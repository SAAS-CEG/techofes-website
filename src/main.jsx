import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

<<<<<<< HEAD
// axios.defaults.baseURL = "https://localhost:3000/api/v1";
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
=======
axios.defaults.baseURL = "https://localhost:3000/api/v1";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
>>>>>>> 52e9e332e6481b09bb2715a4a49967bde13b6db1

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
