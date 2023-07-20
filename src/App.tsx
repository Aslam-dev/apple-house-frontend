import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,  Routes,Route, Link } from 'react-router-dom';
import UserLogin from '../src/components/UserLogin';
import UserSignin from '../src/components/UserSignin';
import './App.css';


import logo from './assets/images/logo.png';
import { Switch } from 'react-native';



function App() {
  return (
    <div className="App"> 
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand me-2" href="/">
                <img  src={logo}  height="40" alt="MDB Logo" loading="lazy"/> 
              </a>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-link px-3 me-2"> <Link to="/login">Log IN</Link></button>
                <button type="button" className="btn btn-primary me-3"><Link to="/signin">Sign IN</Link></button>
              </div>
            </div>
          </nav>
        </div>

       <Routes>
           <Route path="/login" Component={UserLogin} />
           <Route path="/signin" Component={UserSignin} />
        </Routes>

      </Router>

   
    </div>
  );
}

export default App;
