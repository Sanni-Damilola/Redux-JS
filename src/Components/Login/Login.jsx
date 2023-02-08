import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../ReduxState/ReduxState";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            loginUser({
              userName: "favour",
              Age: "10yrs",
              Email: "favour@gmaul.com",
              Stack: "FullStack",
            })
          );
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
