import React from "react";
import moment from "moment";
import TextareaAutosize from "react-textarea-autosize";
import Loader from "./Loader.js";
import { postTweets } from "../lib/database";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";
import "../App.css";

function CreateTweet() {
  const appContext = useContext(AppContext);
  const [tweetText, setTweetText] = useState("");
  const [tweetDate, setTweetDate] = useState("");
  const [tweetData, setTweetData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNoteTextChange = (event) => {
    setTweetText(event.target.value);
    setTweetDate(moment().format());
  };

  useEffect(() => {
    if (tweetText.length <= 140) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [tweetText]);

  useEffect(() => {
    setTweetData({
      content: tweetText,
      date: tweetDate,
      userName: appContext.userName,
      id: uuidv4(),
    });
  }, [tweetText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    //Posting the tweet in the server
    const tweetPostData = {
      content: tweetData.content,
      userName: tweetData.userName,
      date: tweetData.date,
    };
    postTweets(tweetPostData)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success!");
        appContext.setTweetList((prevState) => {
          return [tweetData, ...prevState];
        });
        appContext.setRefreshTime(0);
        setIsLoading(false);
        setIsDisabled(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Your tweet was not saved, please try again");
      });
    //Clearing the previous tweet values
    setTweetText("");
    setTweetDate("");
  };

  return (
    <form className="note-editor" onSubmit={(event) => handleSubmit(event)}>
      <div className="note-input">
        <TextareaAutosize
          type="text"
          name="noteText"
          id="noteText"
          minRows={6}
          className="textarea"
          placeholder="What do you have in mind..."
          value={tweetText}
          onChange={(event) => handleNoteTextChange(event)}
        />
      </div>
      <div className="note-button">
        <div className="warning">
          {isDisabled && (
            <span className="warning-text">
              The tweet can't contain more than 140 characters
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={`add-button add-button-${isDisabled}`}
        >
          Tweet
        </button>
      </div>
      <div className="loader">{isLoading && <Loader />}</div>
    </form>
  );
}

export default CreateTweet;
