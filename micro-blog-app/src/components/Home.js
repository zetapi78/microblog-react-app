import { useEffect, useState } from "react";
import CreateTweet from "./CreateTweet.js";
import TweetsList from "./TweetsList.js";
import NavbarUp from "./NavbarUp.js";
import Loader from "./Loader.js";
import { getTweets } from "../lib/database";
import "../App.css";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { newUserName } = location.state;
  const [tweetsList, setTweetsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTweets()
      .then((response) => response.json())
      .then((data) => {
        setTweetsList(data.tweets);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <NavbarUp userName={newUserName} />
      <div className="note">
        <CreateTweet setTweetsList={setTweetsList} userName={newUserName} />
        <div className="loader">{isLoading && <Loader />}</div>
        <TweetsList tweetsList={tweetsList} setTweetsList={setTweetsList} />
      </div>
    </div>
  );
}

export default Home;
