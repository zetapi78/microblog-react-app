import React from "react";
// import { useEffect, useState } from "react";

function TweetPost(props) {
  const { tweet } = props;

  return (
    <div className="notes-one">
      <div className="tweet-head">
        <div className="user-name">{tweet.userName}</div>
        <div className="saved-note-date">{tweet.date}</div>
      </div>
      <div className="saved-note-text">{tweet.content}</div>
    </div>
  );
}

export default TweetPost;
