
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import axios from "axios";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to="/auth/signin" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
