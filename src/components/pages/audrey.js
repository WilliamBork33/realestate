// Imports
import React from 'react';
import profilePhoto from '../../Assets/images/profilePhoto.jpg';

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

const StyleProfilePhoto= {
  width:'100%',
  position:'center',
  margin:'20px',
  border: '1px solid',
  outlineStyle: 'solid',
  outlineColor: 'black'
};

// Webpage
function Audrey() {
  return (
    <div className="container-fluid" style={StyleContainer}>
      <h1 style={StyleH1}>
        Audrey
      </h1>
      <div className="row">
        <div className="col">
          <p style={StyleP}>
            Ullamco dolor adipisicing enim laboris et cupidatat deserunt nisi aliquip proident nulla nostrud veniam. Nostrud id commodo exercitation dolor. Aliquip exercitation enim non deserunt veniam fugiat labore pariatur dolor et Lorem duis. Non quis exercitation cupidatat dolor ex culpa do qui quis. Sint sunt magna adipisicing elit labore nostrud incididunt quis.
          </p>
        </div>
        <div className="col">
          <img src={profilePhoto} style={StyleProfilePhoto} alt="Audrey" />
        </div>
      </div>
    </div>
  );
}

export default Audrey;
