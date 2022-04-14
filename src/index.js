import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
