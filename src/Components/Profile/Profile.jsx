import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.myReducer.current);

  return (
    <div>
      <h1>User</h1>
      {/* <div>count: {userData?.count}</div> */}
      <div>userName: {userData?.name}</div>
      <div>email : {userData?.email}</div>
      <div>age: {userData?.age}</div>
      <div>stack : {userData?.stack}</div>
    </div>
  );
};

export default Profile;
