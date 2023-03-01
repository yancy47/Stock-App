import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <div className="navBar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
