import TweetPost from "./TweetPost";
import { useState, useEffect } from "react";

function TweetsList(props) {
  const { tweetsList, setTweetsList } = props;
  const [tweetToErase, setTweetToErase] = useState();

  useEffect(() => {
    const remainedTweets = tweetsList.filter(
      (tweet) => tweet.dateCreated !== tweetToErase
    );
    setTweetsList(remainedTweets);
  }, [tweetToErase]);

  useEffect(() => {
    window.localStorage.setItem("saved_tweets", JSON.stringify(tweetsList));
  }, [tweetsList]);

  return (
    <div className="notes-grid">
      {tweetsList.map((tweet) => (
        <TweetPost
          key={tweet.dateCreated}
          tweet={tweet}
          date={tweet.dateCreated}
          setTweetToErase={setTweetToErase}
        />
      ))}
    </div>
  );
}

export default TweetsList;
