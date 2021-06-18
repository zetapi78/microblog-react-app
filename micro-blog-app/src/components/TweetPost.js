import React from "react";
// import { useEffect, useState } from "react";

function TweetPost(props) {
  const { tweet, date, setTweetToErase } = props;

  const onRemoveTweet = (date) => {
    setTweetToErase(date);
  };

  return (
    <div className="notes-one">
      <div className="tweet-head">
        <div className="user-name">{"username"}</div>
        <div className="saved-note-date">{tweet.tweetDate}</div>
      </div>
      <div className="saved-note-text">{tweet.tweetText}</div>
      <div className="trash-icon">
        <i
          className="fas fa-trash-alt"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete your tweet?")) {
              onRemoveTweet(date);
            }
          }}
        ></i>
      </div>
    </div>
  );
}

export default TweetPost;
