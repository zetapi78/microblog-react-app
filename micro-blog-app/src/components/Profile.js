import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState } from "react";
import NavbarUp from "./NavbarUp.js";
import "../App.css";

function Profile() {
  const savedUserName = JSON.parse(window.localStorage.getItem("username"));
  const [userName, setUserName] = useState(savedUserName);
  const [newUserName, setNewUserName] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    if (userName.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewUserName(userName);
    window.localStorage.setItem("username", JSON.stringify(userName));
    alert("Username changed succesfully!");
  };

  return (
    <div className="page-wrapper">
      <NavbarUp userName={newUserName} />
      <div className="username">
        <div className="profile-title">Profile</div>
        <form className="name-editor" onSubmit={(event) => handleSubmit(event)}>
          <div className="name-input">
            <label htmlFor="nameText">Username</label>
            <TextareaAutosize
              type="text"
              name="nameText"
              id="nameText"
              minRows={1}
              className="namearea"
              value={userName}
              onChange={(event) => handleNameChange(event)}
            />
          </div>
          <div className="user-button">
            <button
              type="submit"
              disabled={isDisabled}
              className={`add-button add-button-${isDisabled}`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Profile;
