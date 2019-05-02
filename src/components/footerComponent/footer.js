// Imports
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/images/kwLogo.png';

// Const for styling
const StyleContainer = {
  width: '90%',
  margin: '20px'
};

const StyleLogo= {
  margin: "20px"
};

const StyleHyperlink= {
  color: "red",
  //position: "relative",
  display: "block"
};

// Webpage
function Footer() {
  return (
    <footer>
      <div className="container-fluid" style={StyleContainer}>
        <Link to={"/"}>
          <img src={logo} style={StyleLogo} alt="Logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
