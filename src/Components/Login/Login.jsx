import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, logOutUser } from "../ReduxState/ReduxState";

const Login = () => {
  const dispatch = useDispatch(); // function useage 👇👇✔✔
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [Age, setAge] = React.useState("");
  const [stack, setStack] = React.useState("");

  return (
    <div>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name=""
        placeholder="email"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setStack(e.target.value);
        }}
        type="text"
        name=""
        placeholder="stack"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        name=""
        placeholder="name"
      />{" "}
      <br />
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="text"
        name=""
        placeholder="age"
      />{" "}
      <br />
      {name !== "" && Age !== "" && email !== "" && stack !== "" ? (
        <button
          onClick={() => {
            dispatch(
              // here 👇✔❤❕
              loginUser({
                userName: name,
                Age: Age,
                Email: email,
                Stack: stack,
              })
            ); //  store data
          }}
          style={{ cursor: "pointer", padding: "10px 30px", margin: "10px" }}
        >
          Login
        </button>
      ) : null}
      <button
        onClick={() => {
          dispatch(logOutUser());
        }} // logOut
        style={{ cursor: "pointer", padding: "10px 30px", margin: "10px" }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Login;
