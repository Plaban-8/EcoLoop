import Link from "next/link";

export const Header = () => (
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
        <Link href="/login">Logout</Link>
      </li>
    </ul>
  </nav>
);
