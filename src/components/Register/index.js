import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/api/user/register`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName
        })
      });
      console.log("************ var ", res);
      history.push("/admin");
    } catch (err) {
      console.log("************ Register err", err);
      // TODO fix after connecting to backend auth
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={e => setLastName(e.target.value)}
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
