import TweetPost from "./TweetPost";
import AppContext from "../context/AppContext";
import { useContext } from "react";

function TweetList() {
  const appContext = useContext(AppContext);

  return (
    <div className="notes-grid">
      {appContext.tweetList.map((tweet) => (
        <TweetPost key={tweet.tweetId} tweet={tweet} id={tweet.tweetId} />
      ))}
    </div>
  );
}

export default TweetList;
