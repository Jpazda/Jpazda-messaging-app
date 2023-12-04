import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Login } from "./views/login";
import { Register } from "./views/registration";
import { AuthContext } from "./context/authContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const currentUser = useContext(AuthContext);
  console.log("layout-current user:",currentUser);
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
