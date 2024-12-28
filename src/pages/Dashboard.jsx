import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full h-[95vh] bg-gray-700  text-white flex">
      <div className="left-nav h-[95vh] bg-slate-500 flex-1">
        <ul className="flex flex-col gap-10 p-5 lg:p-10 items-left text-xl lg:text-2xl lg:font-normal text-gray-200 font-medium">
          <li>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                isActive ? "active-Linknested" : "inactive"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mock-tests"
              className={({ isActive }) =>
                isActive ? "active-Linknested" : "inactive"
              }
            >
              Mock Tests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reports"
              className={({ isActive }) =>
                isActive ? "active-Linknested" : "inactive"
              }
            >
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="py-8 px-8 flex-3 flex flex-col gap-5 lg:gap-8">
        <h1 className="text-3xl font-medium lg:text-5xl">Dashboard</h1>

        {/* Used in order to render the Child paths and componets inside a parent component */}
        <Outlet />
        {/* Used necessarily in case of react-router */}
      </div>
    </div>
  );
};

export default Dashboard;
