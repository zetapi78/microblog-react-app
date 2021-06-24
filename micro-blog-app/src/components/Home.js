import { useEffect, useState, useContext } from "react";
import CreateTweet from "./CreateTweet.js";
import TweetList from "./TweetList.js";
import NavbarUp from "./NavbarUp.js";
import Loader from "./Loader.js";
import AppContext from "../context/AppContext";
import { getTweets, useInterval } from "../lib/database";
import "../App.css";

function Home() {
  const appContext = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTweets()
      .then((response) => response.json())
      .then((data) => {
        appContext.setTweetList(data.tweets);
        setIsLoading(false);
        appContext.setRefreshTime(0);
      });
  }, [appContext.refreshTime]);

  //this is to run a fetch every 3 min
  useInterval(() => {
    appContext.setRefreshTime(appContext.refreshTime + 1);
  }, 180000); //setting the refresh time to 3min

  return (
    <div className="page-wrapper">
      <NavbarUp />
      <div className="note">
        <CreateTweet />
        <div className="loader">{isLoading && <Loader />}</div>
        <TweetList />
      </div>
    </div>
  );
}

export default Home;
