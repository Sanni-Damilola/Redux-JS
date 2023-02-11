import React from "react";
import { useDispatch } from "react-redux";
import { logInUser, logOutUser } from "../ReduxState/ReduxState";

const Profile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [stack, setStack] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
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
      <button
      style={{ margin: "10px", padding: "5px" }}>logout</button>
    </div>
  );
};

export default Profile;
