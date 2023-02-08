import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.myReducer.current); // reading data

  return (
    <div>
      <h1>user</h1>
      <div>UserName : {userData?.userName} </div>
      <div>Age : {userData?.Age}</div>
      <div>Email : {userData?.Email}</div>
      <div>Stack : {userData?.Stack}</div>
    </div>
  );
};

export default Profile;
