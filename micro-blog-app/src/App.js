import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import AppContext from "./context/AppContext";
import "./App.css";

function App() {
  const [tweetList, setTweetList] = useState([]);
  const savedUserName = JSON.parse(window.localStorage.getItem("username"));
  const [userName, setUserName] = useState(savedUserName || "anonymous");
  const [refreshTime, setRefreshTime] = useState(0);
  return (
    <Router>
      <AppContext.Provider
        value={{
          tweetList: tweetList,
          setTweetList: setTweetList,
          userName: userName,
          setUserName: setUserName,
          refreshTime: refreshTime,
          setRefreshTime: setRefreshTime,
        }}
      >
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
