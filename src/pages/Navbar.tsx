import React from 'react';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
