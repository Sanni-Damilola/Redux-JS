import React from "react";

const Profile = () => {
  const userData = React.useSeletor((state) => state.myReducer.current);

  return (
    <div>
      <h1>User</h1>
      <div>userName: {userData.name}</div>
      <div>emai</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Profile;
