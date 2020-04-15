import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./containers/userpages/UserPage";
import UserCreatePage from "./containers/userpages/UserCreatePage/UserCreatePage.js";
import Home from "./containers/Home";
import UserPageEdit from "./containers/userpages/UserPageEdit/UserPageEdit";
import JobCreatePage from "./containers/jobpages/JobCreatePage.js";
import JobPage from "./containers/jobpages/JobPage";
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
          <Route exact path="/createjob" component={JobCreatePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
