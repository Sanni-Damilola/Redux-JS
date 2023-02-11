import React from "react";
import { useDispatch } from "react-redux";
import { logInUser, logOutUser } from "../ReduxState/ReduxState";

const Profile = () => {
  return (
    <div>
      <button style={{ margin: "10px", padding: "5px" }}>login</button>
      <button style={{ margin: "10px", padding: "5px" }}>logout</button>
    </div>
  );
};

export default Profile;
