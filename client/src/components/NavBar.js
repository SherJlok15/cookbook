import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return(
    <header className="sticky-top">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/recipes/" className="nav-link">Cook Book</Link>
            </li>
            <li className="navbar-item">
              <Link to="/recipes/add/" className="nav-link">Create Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
