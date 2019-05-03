// Imports
import React from 'react';
//import logo from '../../Assets/images/kwLogo.png';
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

const StyleP= {
  margin: '20px'
};

const StyleLogo= {
  margin: "20px"
};

// Webpage
function Homepage() {
  return (
    <div className="container-fluid" style={StyleContainer}>
      <h1 style={StyleH1}>
        Yolanda Real Estate Team
      </h1>
      <div className="row">
        <div className="col">
          <p style={StyleP}>
            Ullamco dolor adipisicing enim laboris et cupidatat deserunt nisi aliquip proident nulla nostrud veniam. Nostrud id commodo exercitation dolor. Aliquip exercitation enim non deserunt veniam fugiat labore pariatur dolor et Lorem duis. Non quis exercitation cupidatat dolor ex culpa do qui quis. Sint sunt magna adipisicing elit labore nostrud incididunt quis.
          </p>
        </div>
        <div className="col">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pJh0XEU6Rv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
