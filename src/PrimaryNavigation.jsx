import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryNavigation = () => {
  return (
    <nav role="navigation header__nav clr-txt-100 ">
      <div id="menuToggle">
        <input type="checkbox" />
        <span className="clr-txt-200"></span>
        <span className="clr-txt-200"></span>
        <span className="clr-txt-200"></span>
        <ul id="menu">
          <Link to="/">
            <li className="header__nav--element ff-secondary">home</li>
          </Link>
          <Link to="destination">
            <li className="header__nav--element ff-secondary">destination</li>
          </Link>

          <a href="#">
            <li className="header__nav--element ff-secondary">crew</li>
          </a>
          <a href="#">
            <li className="header__nav--element ff-secondary">technology</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default PrimaryNavigation;
