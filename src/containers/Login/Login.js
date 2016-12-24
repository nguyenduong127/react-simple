import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import config from 'config';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

export default class Login extends Component {

    static propTypes = {
        online: PropTypes.bool
    };

    render() {
        const {online} = this.props;
        return (
            <div >
                <div className="container">
                    <h1>Login Page</h1>
                    <form action="#" method="POST">
                        <p><input type="text" name="email"/></p>
                        <p><input type="password" name="password"/></p>
                        <p><input type="button" value="Submit"/></p>
                    </form>
                </div>
            </div>
        );
    }
}
