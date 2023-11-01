import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <p>Navbar</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/kontak">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
