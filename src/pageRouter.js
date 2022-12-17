import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserListingPage from "./pages/UserListingPg";
import UsersRegisterPg from "./pages/UsersRegisterPg";

import axios from "./axios";
import HomePg from "./pages/HomePg";
axios.defaults.withCredentials = true;

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListingPage />} />
        <Route path="/home" element={<HomePg />} />
        <Route path="/register" element={<UsersRegisterPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
