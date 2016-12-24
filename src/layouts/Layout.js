import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <div>Layout</div>
                {children}
            </div>
        );
    }
}
