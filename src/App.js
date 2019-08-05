import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import 'jquery/dist/jquery';
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from './components/home';
import Customers from './components/customers';
import CustomerDetails from './components/customer'
import logo from './logo.svg';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="nav-link"><img src={logo} className="App-logo" alt="logo" height="36" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/customers/" className="nav-link">Customers</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/customers/" component={Customers} />
            <Route exact path="/customer/:id" render={props => <CustomerDetails {...props.match.params} />} />
          </div>

          <footer>&copy; 2019 by Judson Terrell</footer>
        </Router>
      </div>
    );
  }
}

export default App;
