import React from "react";

import Login from "../../Components/Login/Login.jsx";
import SignUp from "../../Components/SignUp/SignUp";

import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
