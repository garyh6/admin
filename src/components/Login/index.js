import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/api/user/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }),
        body: JSON.stringify({
          email,
          password
        }),
        credentials: "include"
      });
      history.push("/admin");
    } catch (err) {
      console.log("************ login err", err);
      // TODO fix after connecting to backend auth
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
