// components/Sidebar.js
import "./Sidebar.css";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-li">
          <Link href="/student">Dashboard</Link>
        </li>
        <li className="sidebar-li">
          <Link href="/attendance">Attendance</Link>
        </li>
        <li className="sidebar-li">
          <Link href="/assignment">Assignment</Link>
        </li>
        <li className="sidebar-li">
          <Link href="/discussion forum">Discussion Forum</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
