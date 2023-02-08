import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.myReducer.current); // reading data

  return (
    <div>
      <h1>user</h1>
      <h3>
        UserName :<pre>{userData?.userName}</pre>
      </h3>
      <h3>
        Age : <pre>{userData?.Age}</pre>
      </h3>
      <h3>
        Email : <pre>{userData?.Email}</pre>
      </h3>
      <h3>
        Stack : <pre>{userData?.Stack}</pre>
      </h3>
    </div>
  );
};

export default Profile;
