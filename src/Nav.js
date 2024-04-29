import React from "react";
import { Link } from "react-router-dom";

function NavBar({dogs}) {
  return (
    <nav className="NavBar">
      <Link to="/dogs">
        Home
      </Link>
      {dogs.map((dog, index) => (
        <Link key={index} to={`/dog/${dog.name}`}>
          {dog.name}
        </Link>
      ))}
        </nav>
  );
}

export default NavBar;