import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";

import { Home } from "./components/Main/home";
import { CreateAccount} from "./components/Main/createaccount";
import { Deposit } from "./components/Main/deposit";
import { Withdraw } from "./components/Main/withdraw";
import { AllData } from "./components/Main/alldata";



import { UserProvider } from './components/Context/UserContext';
import { TransactionProvider } from './components/Context/TransactionContext';



function App() {

 
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand text-info fs-1">
              <img src="badbankicon.png" alt="bad bank" width="65" height="65" className="d-inline-block align-text-center"/>
              Bad Bank
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                      <Link to="/createaccount" className="nav-link text-info">Create Account</Link>
                  </li>
               
                  <li className="nav-item">
                      <Link to="/deposit" className="nav-link text-info" >Deposit</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/withdraw" className="nav-link text-info">Withdraw</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/alldata" className="nav-link text-info">All Data</Link>
                  </li>
                </ul>
            </div>
            </div>
        </nav>
      
      <Switch>
        <UserProvider>
          <TransactionProvider>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/createaccount">
              <CreateAccount/>
            </Route>
            <Route path="/deposit">
              <Deposit/>
            </Route>
            <Route path="/withdraw">
              <Withdraw/>
            </Route>
            <Route path="/alldata">
              <AllData/>
            </Route>
          </TransactionProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
