import React from 'react';
import './App.css';

import {Switch,Route,Link} from 'react-router-dom';
import Add from './components/add';
import Show from './components/show';
import Update from './components/update';
import Login from './Login/Login';
import Showdetails from './components/Showdetails';

import { useSelector } from 'react-redux';
import { selectUser } from './option/userSlice';
import PrivateRoute from './privateroute';
import PublicRoute from './publicroute';


function App(){
  const user=useSelector(selectUser);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link className="navbar-brand" to="/">Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/show">Show Product</Link>
            
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">ADMIN</Link>
            </li>
           
            

            {/* <li className="nav-item">
            <Link className="nav-link" to="/add">ADD Product</Link>
            </li> */}
          </ul>
         {/*  {user ? <Logout/> : <Login/>} */}
        </div>
      </nav>
      <Switch>
       
        <PrivateRoute restricted={true}  path="/add" component={Add} />
        <Route  path="/show" component={Show} />
        <Route  path="/show" component={Show} />
        <Route  path="/login" component={Login} />

        {/* <Route path="/update" component={Update} /> */}
        {/* <Route path="/:id/" element={ Showdetails} /> */}
         <Route  path="/:id" component={Showdetails}  /> 
         
        
        </Switch>
    </div>
  );
}

export default App;



