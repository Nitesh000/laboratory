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

  const loginClickHandler = async () => {
    const userData = new FormData();
    userData.append("username", userName);
    userData.append("password", password);

    const respose = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await respose.json();
    if (data.redirect) {
      navigate(`user/${data.redirect}`);
    } else {
      alert(data.message);
    }
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
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-darkGreen text-white font-bold my-4 py-2 px-4 rounded-md mt-4"
            onClick={loginClickHandler}
          >
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
