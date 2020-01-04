import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vidly
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rentals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
