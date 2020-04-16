import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./containers/userPages/UserPage";
import UserCreatePage from "./containers/userPages/UserCreatePage/UserCreatePage.js";
import Home from "./containers/Home";
import UserPageEdit from "./containers/userPages/UserPageEdit/UserPageEdit";
import JobCreatePage from "./containers/jobpages/JobCreatePage.js";
import JobEdit from "./containers/jobpages/JobEdit.js";
import JobPage from "./containers/jobpages/JobPage";
import Header from "./containers/Header/Header";
import AssignUser from "./containers/userPages/AssignUser/AssignUser";

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
          <Route exact path="/edituser/:userId" component={UserPageEdit} />
          <Route exact path="/jobs" component={JobPage} />
          <Route exact path="/createjob" component={JobCreatePage} />
          <Route exact path="/editjob/:jobId" component={JobEdit} />
          <Route exact path="/assignuser" component={AssignUser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
