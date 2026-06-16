// import React from "react";
// import "../style/nav.css";
// import logo from "../assets/logo.jpg";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav>
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//       </div>
//       <div className="nav-list">
//         <Link to={"/"}> Home</Link>
//         <Link to={"/Beauty"}> Beauty</Link>
//         <Link to={"/Genz"}> Genz</Link>
//         <Link to={"/Kids"}> Kids</Link>
//         <Link to={"/Mens"}>Mens</Link>
//         <Link to={"/Women"}>Women</Link>
//       </div>
//       <div className="nav-search"></div>
//       <div className="nav-btn">
//         <Link to={"/Log"}>
//           <button>Login</button>
//         </Link>
//         <Link to={"/Reg"}>
//           <button>Register</button>
//         </Link>

//         <Link to={"/cart"}>
//           <button>Cart</button>
//         </Link>



//         <Link to={"/Admin/CreatePoduct"}>
//           <button>Admin</button>
//         </Link>

//       </div>
//     </nav>
//   );
// };

// export default Nav;



import React, { useContext } from "react";
import "../style/nav.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      {/* LOGO */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* MENU */}
      <div className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/Beauty">Beauty</Link>
        <Link to="/Genz">Genz</Link>
        <Link to="/Kids">Kids</Link>
        <Link to="/Mens">Mens</Link>
        <Link to="/Women">Women</Link>
      </div>

      {/* BUTTONS */}
      <div className="nav-btn">

        {/* AUTH CONDITIONAL UI */}
        {!user ? (
          <>
            <Link to="/Log">
              <button>Login</button>
            </Link>

            <Link to="/Reg">
              <button>Register</button>
            </Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "10px" }}>
              Hi, {user.name}
            </span>

            <button onClick={logout}>Logout</button>
          </>
        )}

        {/* COMMON LINKS */}
        <Link to="/Cart">
          <button>Cart</button>
        </Link>

        <Link to="/Admin/CreatePoduct">
          <button>Admin</button>
        </Link>

      </div>
    </nav>
  );
};

export default Nav;