import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './customers.css'
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';
const axios = require('axios');



function Customer(props) {
    return props.customers.map((a, b) => {
        return (
            <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.username}</td>
                <td>{a.email.toLowerCase()}</td>
                <td className="text-center"><Link to={'/customer/' + a.id}><button className="btn btn-primary">View Details</button></Link></td>
            </tr>
        )
    })
}

class Customers extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            customers: Array(0).fill()
        }
    }

    componentDidMount() {

        Prism.highlightAll();

        this._isMounted = true;
        var self = this;

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response);
                if (self._isMounted) self.setState({ customers: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>

                        <Customer customers={this.state.customers}></Customer>

                    </tbody>
                </table>
                <hr></hr>
                <figure>
                    <figcaption>Customers component</figcaption>
                    <pre>
                        <code className="language-js">
                            <p>{`
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './customers.css'
const axios = require('axios');



function Customer(props) {
    return props.customers.map((a, b) => {
        return (
            <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.username}</td>
                <td>{a.email.toLowerCase()}</td>
                <td className="text-center"><Link to={'/customer/' + a.id}><button className="btn btn-primary">View Details</button></Link></td>
            </tr>
        )
    })
}

class Customers extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            customers: Array(0).fill()
        }
    }

    componentDidMount() {

        this._isMounted = true;
        var self = this;

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response);
                if (self._isMounted) self.setState({ customers: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>

                    <Customer customers={this.state.customers}></Customer>

                </tbody>
            </table>
        )

    }
}


ReactDOM.render(
    <Customers />,
    document.getElementById('root')
);

export default Customers;
`}</p>
                        </code>
                    </pre>
                </figure>
            </div>
        )

    }
}


ReactDOM.render(
    <Customers />,
    document.getElementById('root')
);

export default Customers;