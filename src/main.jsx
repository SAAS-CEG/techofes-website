import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
import  LoginContextProvider  from "./Context/logincontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
   <LoginContextProvider>
    <App />
    </LoginContextProvider>
  </React.StrictMode>
);
