import React, { Component } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';

class Home extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }


    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to the Customers List Demo</h1>
                        <p className="lead">This is a simple react demo to demonstrate routing and basic navigation using react router and axios for api calls.</p>
                    </div>
                </div>
                <hr></hr>
                <figure>
                    <figcaption>App component</figcaption>
                    <pre>
                        <code className="language-js">
                            <p>{`
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import 'jquery/dist/jquery';
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Home from './components/home';
import Customers from './components/customers';
import CustomerDetails from './components/customer'
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg navbar-custom">
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

        <footer>Copyright 2019 by Judson Terrell</footer>
      </Router>
    </div>
  );
}

export default App;
`}</p>
                        </code>
                    </pre>
                </figure>


                <figure>
                    <figcaption>Home component</figcaption>
                    <pre>
                        <code className="language-js">
                            <p>{`
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to the Customers List Demo</h1>
                        <p className="lead">This is a simple react demo to demonstrate routing and basic navigation using react router and axios for api calls.</p>
                    </div>
                </div>
                <figure>
                    <figcaption>Your code title</figcaption>
                    <pre>
                        <code className="language-js">
                            <p>{function blitz(){return "fn body is visible"}}</p>
                        </code>
                    </pre>
                </figure>
            </div>

        );
    }
}

export default Home; 
`}</p>
                        </code>
                    </pre>
                </figure>

            </div>

        );
    }
}

export default Home;