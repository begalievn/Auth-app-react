import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";
import UserMe from "./routes/UserMe";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const store = configureStore({
  reducer: {},
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<Main />} />
          <Route path="/users/me" element={<UserMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
