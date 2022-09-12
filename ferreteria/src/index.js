import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.scss?v1.5.0";
import "./assets/css/demo.css";

import AdminLayout from "./layouts/Admin.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="./admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="./admin/dashboard" />
    </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
