import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class App extends Component {
    render() {
        const { user, notifs, children } = this.props;
        return (
            <div>
                <h1>Page default</h1>
                <div className="well text-center">
                    Hello world!
                </div>
            </div>
        );
    }
}
