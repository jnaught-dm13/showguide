import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="nav-list">
        <Link to="/dashboard">
          <div>Home</div>
        </Link>
        <Link to="/favorite">
          <div>My List {0}</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/profile">
          <div>Profile</div>
        </Link>
        <div>placeholder</div>
      </div>
    </header>
  );
}
