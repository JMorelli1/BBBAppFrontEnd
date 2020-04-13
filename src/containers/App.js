import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserPage from './UserPage';
import Home from './Home';
import UserPageEdit from './UserPageEdit';

const App = () => {

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/useredit/:userId" component={UserPageEdit} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
