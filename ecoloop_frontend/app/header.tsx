"use client";

import Link from "next/link";
import Cookies from "js-cookie";

export const Header = () => {
  const logout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">EcoLoop ♻️</div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/donation">Donations</Link>
        </li>
        <li>
          <Link href="/food">Food</Link>
        </li>
        <li>
          <Link href="/awarness">Awareness</Link>
        </li>
        <li>
          <Link href="/feed">Community Feed</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};
