import React from "react";
import { logInUser } from "../ReduxState/ReduxState";

const Profile = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [stack, setStack] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = React.useDispatch();

  return (
    <div>
      <input
      
      type="email" placeholder="email" /> <br />
      <input type="text" placeholder="name" /> <br />
      <input type="text" placeholder="stack" /> <br />
      <input type="number" placeholder="age" /> <br />
      <button
        onClick={() => {
          dispatch(
            logInUser({
              name: name,
              email: email,
              stack: stack,
              age: age,
            })
          );
        }}
        style={{ margin: "10px", padding: "5px" }}
      >
        login
      </button>
      <button style={{ margin: "10px", padding: "5px" }}>logout</button>
    </div>
  );
};

export default Profile;
