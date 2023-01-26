import React, { useState } from "react";
import InputField from "../components/InputField";
import Headers from "../components/Header";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const alreadyHaveHandler = () => {
    navigate("/login");
  };
  return (
    <React.Fragment>
      {" "}
      <Headers location="SignIn" />
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col w-2/5 bg-pale items-center rounded-md">
          <label className="text-xl text-darkGreen font-bold py-6 tracking-[6px]">
            Sign-In
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
            label="Phone"
            name="phone"
            type="number"
            placeholder="Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-darkGreen text-white font-bold my-4 py-2 px-4 rounded-md mt-4">
            SignIn
          </button>
          <p className="mb-4">
            Already have an account!{" "}
            <a
              onClick={alreadyHaveHandler}
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

export default SignIn;
