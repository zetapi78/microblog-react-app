import { useEffect, useState } from "react";
import CreateTweet from "./components/CreateTweet.js";
import TweetsList from "./components/TweetsList.js";
import { getTweets } from "./lib/database";
import "./App.css";

function App() {
  const [tweetsList, setTweetsList] = useState([]);

  useEffect(() => {
    getTweets()
      .then((response) => response.json())
      .then((data) => {
        setTweetsList(data.tweets);
      });
  }, []);

  return (
    <div className="note">
      <CreateTweet setTweetsList={setTweetsList} />
      <TweetsList tweetsList={tweetsList} setTweetsList={setTweetsList} />
    </div>
  );
}

export default App;
