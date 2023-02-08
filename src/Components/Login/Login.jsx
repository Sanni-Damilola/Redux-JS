import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../ReduxState/ReduxState";

const Login = () => {
  const dispatch = useDispatch(); // function useage 👇👇✔✔

  return (
    <div>
      <button
        onClick={() => {
          dispatch( // here 👇✔❤❕
            loginUser({
              userName: "favour",
              Age: "10yrs",
              Email: "favour@gmaul.com",
              Stack: "FullStack",
            })
          ); //  store data
        }} 
        style={{ cursor: "pointer", padding: "10px 30px", margin: "10px" }}
      >
        Login
      </button>
      <button
        style={{ cursor: "pointer", padding: "10px 30px", margin: "10px" }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Login;
