import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
