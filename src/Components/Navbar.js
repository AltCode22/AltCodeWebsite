import React from "react";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-black p-4 text-blue font-bold font-mono text-2xl flex justify-between">
      <Link to="/">
        <h2 className="text-2xl font-mono">Tarun Singh</h2>
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
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
