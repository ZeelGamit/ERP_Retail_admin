import { Routes, Route } from "react-router-dom";
import { Navbar, Revenue } from "./index";
import { navbar } from "../constant/url";
import React from "react";
import { bool, func } from 'prop-types';

const Main = ({ auth, setAuth }) => {

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
      {navbar.map((item, i = 0) => (
        <Route path={item.path} element={<item.element auth={auth} setAuth={setAuth} />} key={i} />
      ))}
      <Route path="/revenue" element={<Revenue />} />
      </Routes>
    </div>
  );
}

Main.propTypes = {
  auth: bool.isRequired,
  setAuth : func.isRequired
};

export default Main;
