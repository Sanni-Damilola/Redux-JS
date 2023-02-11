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
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="name"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setStack(e.target.value);
        }}
        type="text"
        placeholder="stack"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="number"
        placeholder="age"
      />{" "}
      <br />
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
