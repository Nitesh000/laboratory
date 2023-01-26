import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import InputField from "../components/InputField";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const cerateHereHandler = () => {
    navigate("/signin");
  };
  return (
    <React.Fragment>
      {" "}
      <Header location="login" />
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col w-2/5 bg-pale items-center rounded-md">
          <label className="text-xl text-darkGreen font-bold py-6 tracking-[6px]">
            Login
          </label>
          <InputField
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={() => setUserName(userName)}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={() => setPassword(password)}
          />
          <button className="bg-darkGreen text-white font-bold my-4 py-2 px-4 rounded-md mt-4">
            Login
          </button>
          <p className="mb-4">
            Don't have an account!{" "}
            <a
              onClick={cerateHereHandler}
              className="text-blue-500 italic cursor-pointer hover:underline"
            >
              Create here.
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
