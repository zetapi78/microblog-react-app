import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState, useContext } from "react";
import NavbarUp from "./NavbarUp.js";
import AppContext from "../context/AppContext";
import "../App.css";

function Profile() {
  const appContext = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNameChange = (event) => {
    appContext.setUserName(event.target.value);
  };

  useEffect(() => {
    if (appContext.userName.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [appContext.userName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    appContext.setUserName(appContext.userName);
    window.localStorage.setItem(
      "username",
      JSON.stringify(appContext.userName)
    );
    alert("Username changed succesfully!");
  };

  return (
    <div className="page-wrapper">
      <NavbarUp />
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
              value={appContext.userName}
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
