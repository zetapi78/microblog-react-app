import React from "react";
import moment from "moment";
import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState } from "react";
import "../App.css";

function CreateTweet(props) {
  const { setTweetsList } = props;
  const [tweetText, setTweetText] = useState("");
  const [tweetDate, setTweetDate] = useState("");
  const [tweetData, setTweetData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNoteTextChange = (event) => {
    setTweetText(event.target.value);
    setTweetDate(moment().format());
  };

  useEffect(() => {
    // console.log(tweetText.length);
    // console.log(isDisabled);
    if (tweetText.length <= 140) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [tweetText]);

  useEffect(() => {
    setTweetData({
      tweetText: tweetText,
      tweetDate: tweetDate,
      dateCreated: Date.now(),
    });
  }, [tweetText]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTweetsList((prevState) => {
      return [tweetData, ...prevState];
    });

    setTweetText("");
    setTweetDate("");
  };

  return (
    <form className="note-editor" onSubmit={(event) => handleSubmit(event)}>
      <div className="note-input">
        {/* <label htmlFor="noteText">Your tweet here..</label> */}
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
    </form>
  );
}

export default CreateTweet;
