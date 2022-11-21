import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-black p-4 text-blue font-bold font-mono text-2xl flex justify-between">
      <Link to="/">
        <h2 className="text-2xl font-mono">AltCode</h2>
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link to="/">Who we are</Link>
        </li>
        <li>
          <Link to="/about">What we do</Link>
        </li>
        <li>
          <Link to="/projects">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div>
        <div>
          <Switcher />
        </div>
      </div>
      </ul>  
    </nav>
    
  );
}

export default Navbar;
