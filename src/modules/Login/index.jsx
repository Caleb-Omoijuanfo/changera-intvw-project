import React from "react";

import githubLogo from "../../lib/assets/GitHub-Mark-64px.png";

import "./login.css";

const Login = () => {
  const handleSignIn = () => {
    const url = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
    return window.location.replace(url);
  };

  return (
    <div className="login-screen">
      <div className="login">
        <div className="logo">
          <img src={githubLogo} alt="github logo" />
        </div>
        <div className="text-header-container">
          <span>Sign via Github</span>
        </div>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
