// import React from "react";
// import "../style/reg.css";

// const Reg = () => {
//   return (
//     <div className="REG-Container">
//       <h1>Register Form</h1>
//       <form action="" className="REG-form">
//         <label htmlFor="">Name </label>
//         <input type="text" />

//         <label htmlFor="">Email </label>
//         <input type="email" />

//         <label htmlFor="">Date of Birth </label>
//         <input type="date" />

//         <label htmlFor="">Address </label>
//         <input type="text" />
        
//         <div>
//           <label htmlFor="">Gender </label>
//           <label htmlFor="">Male</label>
//           <input type="radio" />
//           <label htmlFor="">Female</label>
//           <input type="radio" />
//           <label htmlFor="">other's</label>
//           <input type="radio" />
//         </div>

//         <label htmlFor="">Phone Number </label>
//         <input type="number"  />

//         <label htmlFor="">Password </label>
//         <input type="password" style={{color:"black"}} />

//         <label htmlFor="">Confirm Password </label>
//         <input type="password"  style={{color:"black"}} />
     
     
//           <button type="submit"> register</button>
//       </form>
//     </div>
//   );
// };

// export default Reg;


import React, { useState } from "react";
import axios from "axios";
import "../style/reg.css";

const Reg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await axios.post("http://localhost:3000/users", {
      name: formData.name,
      email: formData.email,
      dob: formData.dob,
      address: formData.address,
      gender: formData.gender,
      phone: formData.phone,
      password: formData.password,
    });

    alert("Registered Successfully");

    setFormData({
      name: "",
      email: "",
      dob: "",
      address: "",
      gender: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="REG-Container">
      <h1>Register Form</h1>

      <form className="REG-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label>Gender</label>
        <div>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            Other
          </label>

        </div>

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Reg;