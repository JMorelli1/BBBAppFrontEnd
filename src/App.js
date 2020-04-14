import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./containers/UserPage";
import UserCreatePage from "./containers/UserCreatePage/UserCreatePage.js";
import Home from "./containers/Home";
import UserPageEdit from "./containers/UserPageEdit/UserPageEdit";
import JobPage from "./containers/JobPage";
import Header from "./containers/Header/Header";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/createuser" component={UserCreatePage} />
          <Route exact path="/useredit/:userId" component={UserPageEdit} />
          <Route exact path="/jobs" component={JobPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
