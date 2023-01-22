import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputField from "../components/InputField";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
