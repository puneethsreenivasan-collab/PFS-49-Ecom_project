// import React from 'react'
// import "../style/log.css"
// const Log = () => {
//   return (
//     <div>Log</div>
//   )
// }

// export default Log


import React, { useState, useContext } from "react";
import axios from "axios";
import "../style/log.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const { login } = useContext(AuthContext);


 let navigate =useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const generateToken = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const user = res.data.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          const token = generateToken();

          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            token,
          };

          login(userData); // data set in context

          localStorage.setItem("token", token);



          alert(`Welcome ${user.name}`);

          navigate("/");
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="LOG-Container">
      <h1>Login Form</h1>

      <form onSubmit={handleLogin} className="LOG-form">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Log;