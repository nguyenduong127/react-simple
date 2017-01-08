import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import config from 'config';
import {connect} from 'react-redux';

export default class Login extends Component {

    static propTypes = {
        online: PropTypes.bool
    };

    handleLogin = (event) => {
        console.log('test');
        event.preventDefault();
        const email = this.refs.email;
        const password = this.refs.password;
        // this.props.login(input.value);
        // input.value = '';
      }

    render() {
        const {online} = this.props;
        return (
            <div >
                <div className="container">
                    <h1>Login Page</h1>
                    <button onClick={function() {alert("left")}}>Test</button>
                    <form role='form' onSubmit={this.handleLogin}>
                        <p><input type="text" name="email"/></p>
                        <p><input type="password" name="password"/></p>
                        <p><input type="button" value="Submit" onClick={this.handleLogin}/></p>
                    </form>
                </div>
            </div>
        );
    }
}
