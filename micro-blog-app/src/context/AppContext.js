import React from "react";

const AppContext = React.createContext({
  tweetList: "",
  setTweetList: "",
  userName: "",
  setUserName: "",
  refreshTime: "",
  setRefreshTime: "",
});

export default AppContext;
