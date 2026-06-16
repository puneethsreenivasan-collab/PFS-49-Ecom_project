// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Beauty from "./pages/Beauty";
// import Cart from "./pages/Cart";
// import Genz from "./pages/Genz";
// import Kids from "./pages/Kids";
// import Log from "./pages/Log";
// import Mens from "./pages/Mens";
// import Reg from "./pages/Reg";
// import Women from "./pages/Women";
// import CreatePoduct from "./pages/admin/CreatePoduct";
// import MensPro from "./pages/Products/MensPro";

// const Router = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Beauty" element={<Beauty />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Genz" element={<Genz />} />
//         <Route path="/Kids" element={<Kids />} />
//         <Route path="/Log" element={<Log />} />
//         <Route path="/Mens" element={<Mens />} />
//         <Route path="/Reg" element={<Reg />} />
//         <Route path="/Women" element={<Women />} />
//         <Route path="/Admin/CreatePoduct" element={<CreatePoduct />} />

//         {/* Product routes*/}
//         <Route path="/MensPro" element={<MensPro />} />
//       </Routes>
//     </div>
//   );
// };

// export default Router;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Beauty from "./pages/Beauty";
import Cart from "./pages/Cart";
import Genz from "./pages/Genz";
import Kids from "./pages/Kids";
import Log from "./pages/Log";
import Mens from "./pages/Mens";
import Reg from "./pages/Reg";
import Women from "./pages/Women";
import CreatePoduct from "./pages/admin/CreatePoduct";
import MensPro from "./pages/Products/MensPro";

import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/Beauty" element={<Beauty />} />
      <Route path="/Genz" element={<Genz />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/MensPro" element={<MensPro />} />

      {/* AUTH ROUTES */}
      <Route path="/Log" element={<Log />} />
      <Route path="/Reg" element={<Reg />} />

      {/* PROTECTED ROUTES */}

      <Route path="/Cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route path="/Admin/CreatePoduct"
        element={
          <ProtectedRoute>
            <CreatePoduct />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
