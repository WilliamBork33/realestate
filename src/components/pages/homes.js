// Imports
import React from 'react';
import logo from '../../Assets/images/kwLogo.png';
//import './App.css';

// Const for styling
const StyleContainer = {
  width: '90%',
  margin: '20px'
};

const StyleH1 = {
  textAlign: 'center',
  margin: '20px'
};

const StyleP = {
  margin: '20px'
};

// Webpage
function Homes() {
  return (
    <div className="container-fluid" style={StyleContainer}>
      <h1 style={StyleH1}>
        Yolanda Real Estate Team
      </h1>
      <div className="row">
        <div className="col">
          <iframe src="https://yolandabork.kw.com/"
            width="110%" height="500" frameborder="0"
            allowfullscreen sandbox>
            <p><a href="https://yolandabork.kw.com/">Fallback link for browsers that don't support iframes</a></p>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Homes;
