import { useEffect, useState } from "react";
import CreateTweet from "./components/CreateTweet.js";
import TweetsList from "./components/TweetsList.js";
import "./App.css";

function App() {
  const savedTweets = JSON.parse(window.localStorage.getItem("saved_tweets"));
  const [tweetsList, setTweetsList] = useState([...savedTweets]);

  return (
    <div className="note">
      <CreateTweet setTweetsList={setTweetsList} />
      <TweetsList tweetsList={tweetsList} setTweetsList={setTweetsList} />
    </div>
  );
}

export default App;
