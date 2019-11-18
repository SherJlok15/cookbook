import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
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
        <div className="bg-white border-radius">
          <div className="margin-right-10 d-flex align-items-center">
            <input
            className="border-none"
            type="text"
            value={props.navbarSearchValue}
            onChange={(event) => props.navbarGetSearchInputValue(event.target.value)}
            />
            <span className="text-danger resetSearch" onClick={props.navbarSearchInputResetValue}>x</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
