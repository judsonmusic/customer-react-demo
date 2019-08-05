import React from 'react';
import ReactDOM from 'react-dom';
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';
import './customer.css'
const axios = require('axios');



class CustomerDetails extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        }
        console.log('The id is: ', this.props);
    }

    componentDidMount() {

        setTimeout(() => Prism.highlightAll(), 1);

        this._isMounted = true;
        var self = this;

        if (this.props.id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    if (self._isMounted) self.setState({ customer: response.data });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }

    componentWillUnmount() {

        this._isMounted = false;

    }

    render() {


        return (

            <div>

                {this.state.customer && this.state.customer.name ? <div className="card">
                    <h5 className="card-header">{this.state.customer.name}</h5>
                    <div className="card-body"> <ul>
                        <li><strong>Email: </strong> {this.state.customer.email.toLowerCase()}</li>
                        <li><strong>Address: </strong>{this.state.customer.address.street} {this.state.customer.address.suite}</li>
                        <li><strong>City: </strong>{this.state.customer.address.city}</li>
                        <li><strong>Zip Code: </strong>{this.state.customer.address.zipcode}</li>
                    </ul>
                    </div>
                </div> : <div> Loading... </div>}
                <hr></hr>
                <figure>
                    <figcaption>Customer component</figcaption>
                    <pre>
                        <code className="language-js">
                            <p>{`
import React from 'react';
import ReactDOM from 'react-dom';
import './customer.css'
const axios = require('axios');


class CustomerDetails extends React.Component {

_isMounted = false;

constructor(props) {
    super(props);
    this.state = {
        customer: {}
    }
    console.log('The id is: ', this.props);
}

componentDidMount() {

    this._isMounted = true;
    var self = this;

    if (this.props.id) {
        axios.get('https://jsonplaceholder.typicode.com/users/\${this.props.id}')
            .then(function (response) {
                // handle success
                console.log(response);
                if (self._isMounted) self.setState({ customer: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

componentWillUnmount() {

    this._isMounted = false;

}

render() {

    if (this.state.customer && this.state.customer.name) {
        return (
            <div className="card">

                <h5 className="card-header">{this.state.customer.name}</h5>
                <div className="card-body"> <ul>
                    <li><strong>Email: </strong> {this.state.customer.email.toLowerCase()}</li>
                    <li><strong>Address: </strong>{this.state.customer.address.street} {this.state.customer.address.suite}</li>
                    <li><strong>City: </strong>{this.state.customer.address.city}</li>
                    <li><strong>Zip Code: </strong>{this.state.customer.address.zipcode}</li>
                </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}
}

ReactDOM.render(
<CustomerDetails />,
document.getElementById('root')
);

export default CustomerDetails;
`}</p>
                        </code>
                    </pre>
                </figure>
            </div>


        )

    }
}

ReactDOM.render(
    <CustomerDetails />,
    document.getElementById('root')
);

export default CustomerDetails;