import React from "react";

const Profile = () => {
  const userData = React.useSeletor((state) => state.myReducer.current);

  return (
    <div>
      <h1>User</h1>
      <div>userName: {userData?.name}</div>
      <div>email : {userData?.email}</div>
      <div>age: {userData?.age}</div>
      <div>stack : {userData.stack}</div>
    </div>
  );
};

export default Profile;
