import React from "react";

const AppContext = React.createContext({
  tweetList: "",
  setTweetList: "",
  userName: "anonymous",
  setUserName: "",
  refreshTime: "",
  setRefreshTime: "",
});

export default AppContext;
