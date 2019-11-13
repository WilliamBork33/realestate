// Imports
import React from 'react';
import {
  Link
} from 'react-router-dom';
import logo from '../../Assets/images/kwLogo.png';

// Imports for styling
const StyleContainer = {
  width: '90%',
  margin: '40px'
};

const StyleLogo= {
  margin: "20px"
};

// Webpage
function Header() {
  return (
    <header>
      <div className="container-fluid" style={StyleContainer}>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} style={StyleLogo} alt="Logos Yes" />
          </Link>
        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/yolanda">Yolanda</Link>
            </li>
            <li>
              <Link to="/audrey">Audrey</Link>
            </li>
            <li className="last">
              <Link to="/homes">Homes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
