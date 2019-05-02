// Imports
import React from 'react';
import {BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';

// Import Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Yolanda from './components/pages/yolanda';
import Audrey from './components/pages/audrey';
import Homes from './components/pages/homes';

// Import minfied CSS made from SCSS file
import './Assets/css/default.min.css'

// Webpage
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/yolanda' component={Yolanda} />
        <Route exact path='/audrey' component={Audrey} />
        <Route exact path='/homes' component={Homes} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
