import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class Login extends Component {
    render() {
        const { user, notifs, children } = this.props;
        return (
            <div>
                <div>Login layout</div>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}
