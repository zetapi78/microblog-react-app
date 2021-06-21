import TweetPost from "./TweetPost";
// import { useState, useEffect } from "react";

function TweetsList(props) {
  const { tweetsList } = props;

  return (
    <div className="notes-grid">
      {tweetsList.map((tweet) => (
        <TweetPost key={tweet.tweetId} tweet={tweet} id={tweet.tweetId} />
      ))}
    </div>
  );
}

export default TweetsList;
