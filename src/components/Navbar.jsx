import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-800 py-5">
      <ul className="flex justify-center items-center text-white italic gap-10">
        <li className="pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-Link" : "inactive"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="pointer">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-Link" : "inactive"
            }
          >
            About
          </NavLink>
        </li>
        <li className="pointer">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-Link" : "inactive"
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
